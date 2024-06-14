import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string().default("secret"),
  S3_ENDPOINT: z.string(),
  S3_ACCESS_KEY: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  S3_BUCKET_NAME: z.string(),
  S3_PUBLIC_URL: z.string(),
});

const config = EnvSchema.parse(process.env);

export default config;
