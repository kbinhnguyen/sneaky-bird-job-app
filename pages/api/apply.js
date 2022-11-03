import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.AWS_S3_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  }
});


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, position, time, resume, fileType } = req.body;
    if (resume) {
      const bucketParams = {
        Bucket: 'sneakybird-resume',
        Key: `${lastName}_${firstName}${fileType}`,
        Body: '',
      };

      try {
        const command = new PutObjectCommand(bucketParams);
        const signedUrl = await getSignedUrl(s3Client, command, {
          expiresIn: 3600,
        });
        res.status(200).json({ url: signedUrl });
      } catch (e) {
        console.log(e);
        res.status(400).end();
      }
    }
  }
  res.status(400).end();
}

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '10mb',
//     },
//   },
// }
