import type { NextFunction, Request, Response } from "express";

async function error(
  errors: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(errors)

  if (errors instanceof Error) {
    res.status(500);
    res.json({ error: errors, message: errors.message });
  }

  return res.status(500).json({ message: "Something went wrong!" });
}

export default error;

