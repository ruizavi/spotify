import type { NextFunction, Request, Response } from "express";
import jwt, { type Payload } from "jsonwebtoken";
import config from "../../config";
import prisma from "../prisma";

function auth(role: "USER" | "ADMIN") {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;
    const room = <string | undefined>req.headers.room;

    if (!authorization) return res.json({ status: false });

    const token = authorization.replace("Auth ", "");

    try {
      const verifiedToken = <Payload>jwt.verify(token, config.JWT_SECRET, {});

      const id = verifiedToken.id;

      const existUser = await prisma.user.findUnique({ where: { id } });

      if (!existUser) return res.json({ status: false });

      if (existUser.role === "ADMIN") {

        req.user = existUser;
        req.jam = room;

        return next()
      }

      if (existUser.role !== role) return res.json({ status: false });

      req.user = existUser;
      req.jam = room;

      next();
    } catch (error) {
      return res.json({ status: false });
    }
  };
}

export default auth;
