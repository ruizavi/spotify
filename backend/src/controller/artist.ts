import { Router } from "express";
import service from "../service";
import middleware from "../lib/middleware";

const router = Router();

router
  .post("/", middleware.upload.single("avatar"), async (req, res, next) => {
    const body = req.body;
    const file = req.file;

    try {
      const artist = await service.artist.create(body, file);

      return res.json(artist);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const artist = await service.artist.findOne(id);

      return res.json(artist);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id/albums", async (req, res, next) => {
    const id = Number(req.params.id);

    try {
      const albums = await service.artist.findAlbums(id);

      return res.json(albums);
    } catch (error) {
      next(error);
    }
  });

export default router;
