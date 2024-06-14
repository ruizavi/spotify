import { Router } from "express";
import service from "../service";

const router = Router();

router
  .post("/", async (req, res, next) => {
    try {
      const createJam = await service.jam.create();

      return res.json(createJam);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    const user = req.user;
    const id = req.params.id;

    try {
      const added = await service.jam.add(id, user.id);

      return res.json(added);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    const user = req.user;
    const id = req.params.id;

    try {
      const added = await service.jam.outJam(id, user.id);

      return res.json(added);
    } catch (error) {
      next(error);
    }
  });

export default router;
