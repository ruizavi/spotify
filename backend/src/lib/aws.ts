import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import config from "../config";
import fs from "node:fs"

const s3Client = new S3Client({
  endpoint: config.S3_ENDPOINT,
  region: "auto",
  credentials: {
    accessKeyId: config.S3_ACCESS_KEY,
    secretAccessKey: config.S3_SECRET_ACCESS_KEY,
  },
});

async function uploadFile(file: Express.Multer.File) {

  const stream = fs.createReadStream(file.path)

  const command = new PutObjectCommand({
    Bucket: config.S3_BUCKET_NAME,
    Key: file.filename,
    Body: stream,
    ContentLength: file.size,
    ContentType: file.mimetype
  });

  return await s3Client.send(command);
}

const s3 = { uploadFile };

export default s3;
