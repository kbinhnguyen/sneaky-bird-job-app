import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Client } from '@notionhq/client';

const s3Client = new S3Client({
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.AWS_S3_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  }
});

const notion = new Client({ auth: process.env.NOTION_API_KEY });


const positionId = {
  'Culinary': 'cD?A',
  'Carry Out': 'vySf',
  'Counter': 'AGo[',
};

const contactTimeId = {
  'Evening': 'BpYv',
  'Afternoon': 'TCHW',
  'Morning': 'Nr;q',
};


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, position, time, resume, fileType } = req.body;
    switch (true) {
      case (!['Culinary', 'Carry Out', 'Counter'].includes(position)):
        res.status(400).send('Invalid position');
      case (!['Evening', 'Afternoon', 'Morning'].includes(time)):
        res.status(400).send('Invalid time to contact');
      case (!firstName || !lastName || !email || !phone):
        res.status(400).send('Missing required field(s)');
      case (/(.pdf|.docx|.doc)$/.test(fileType)):
        res.status(400).send('Invalid file type');
    }

    const notionPageObj = {
      parent: {
        type: 'database_id',
        database_id: process.env.NOTION_DB_ID,
      },
      properties: {
        title: { title: [ { text: { content: `${firstName} ${lastName}` } } ]},
        'LmAh': { rich_text: [{ text: { content: firstName } }] },
        'd%40%3Bf': {  rich_text: [{ text: { content: lastName } }] },
        'TM%60m': { email },
        'u%5D%7DL': { phone_number: phone },
        '%3CXYp': { select: { id: time[contactTimeId] } },
        'nHmD': { select: { id: position[positionId] } },
      },
    };

    if (resume) {
      notionPageObj.properties['%7CeTc'] = `${process.env.AWS_S3_RESUME_BUCKET_DOMAIN}/${lastName}_${firstName}${fileType}`;

      const bucketParams = {
        Bucket: process.env.AWS_S3_RESUME_BUCKET_NAME,
        Key: `${lastName}_${firstName}${fileType}`,
        Body: '',
      };

      const command = new PutObjectCommand(bucketParams);

      try {
        const [signedUrl, _] = await Promise.all([
          getSignedUrl(s3Client, command, { expiresIn: 3600 }),
          notion.pages.create(notionPageObj),
        ]);
        res.status(200).json({ url: signedUrl });
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
    } else {
      try {
        await notion.pages.create(notionPageObj);
        res.status(200).end();
      } catch (e) {
        console.log(e);
        res.status(500).end();
      }
    }
  }
  res.status(400).send('Invalid request');
}
