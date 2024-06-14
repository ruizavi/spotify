import type * as jwt from "jsonwebtoken";
import type user from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user: user;
      jam?: string;
    }
  }
}

declare module "jsonwebtoken" {
  export interface Payload extends jwt.JwtPayload {
    id: number;
  }
}
