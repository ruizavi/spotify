import { Router } from "express";
import service from "../service";
import middleware from "../lib/middleware";

const router = Router();

router
  .post("/", middleware.upload.single("cover"), async (req, res, next) => {
    const body = req.body;
    const file = req.file;

    try {
      const album = await service.album.create(body, file);

      return res.json(album);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const album = await service.album.findOne(id);

      return res.json(album);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id/song", async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const songs = await service.album.findSongs(id);

      return res.json(songs);
    } catch (error) {
      next(error);
    }
  })
  .put("/:id/song", async (req, res, next) => {
    const body = req.body;
    const id = Number(req.params.id);

    try {
      const songs = await service.album.linkSongs(body, id);

      return res.json(songs);
    } catch (error) {
      next(error);
    }
  });

export default router;
