import { IncomingForm } from 'formidable';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    res.status(200).end();
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
