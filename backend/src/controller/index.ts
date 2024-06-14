import { Router } from "express";
import album from "./album";
import artist from "./artist";
import song from "./song";
import auth from "./auth";
import jam from "./jam";
import playlist from "./playlist";
import search from "./search";
import user from "./user";
import middleware from "../lib/middleware";

const router = Router();

router.use("/album", middleware.auth("USER"), album);
router.use("/artist", middleware.auth("USER"), artist);
router.use("/song", middleware.auth("USER"), song);
router.use("/auth", auth);
router.use("/jam", middleware.auth("USER"), jam);
router.use("/playlist", middleware.auth("USER"), playlist);
router.use("/user", middleware.auth("USER"), user);
router.use("/search", middleware.auth("USER"), search);
export default router;
