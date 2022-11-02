import { IncomingForm } from 'formidable';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const fData = await new Promise((resolve, reject) => {
        const form = new IncomingForm({
            multiples: false
        })
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            resolve({ fields, files })
        })
    });

    const imageFile = fData.files.imageFile;
    const tempImagePath = imageFile?.filepath;
    const image = fs.readFileSync(tempImagePath);
    fs.writeFileSync('../../uploads', image);
    res.status(200).end();
    } catch (e) {
      console.log(e);
    }

  }
  res.status(400).end();
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}
