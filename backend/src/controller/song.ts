import { Router } from "express";
import service from "../service";
import middleware from "../lib/middleware";

const router = Router();

router
  .post("/", middleware.upload.single("song"), async (req, res, next) => {
    const body = req.body;
    const file = req.file;
    try {
      if (!file) throw new Error("File not upload");

      const song = await service.song.create(body, file);

      return res.json(song);
    } catch (error) {
      next(next);
    }
  })
  .get("/:id", async (req, res, next) => {
    const id = Number(req.params.id);
    const userId = req.user.id;

    try {
      const song = await service.song.findOne(id, userId);

      return res.json(song);
    } catch (error) {
      next(error);
    }
  });

export default router;
