import { Router } from "express";
import service from "../service";

const router = Router();

router
	.post("/", async (req, res, next) => {
		const user = req.user.id;
		const body = req.body;

		try {
			const playlist = await service.playlist.create(body, user);

			return res.json(playlist);
		} catch (error) {
			next(error);
		}
	})
	.get("/:id/song", async (req, res, next) => {
		const id = Number(req.params.id);

		try {
			const songs = await service.playlist.findSongs(id);

			return res.json(songs);
		} catch (error) {
			next(error);
		}
	})
	.get("/:id", async (req, res, next) => {
		const id = Number(req.params.id);

		try {
			const playlist = await service.playlist.findOne(id);

			return res.json(playlist);
		} catch (error) {
			next(error);
		}
	})
	.get("/", async (req, res, next) => {
		const user = req.user.id;

		try {
			const playlists = await service.playlist.find(user);

			return res.json(playlists);
		} catch (error) {
			next(error);
		}
	})
	.delete("/:id", async (req, res, next) => {
		const id = Number(req.params.id);
		const user = await req.user.id;

		try {
			const deleted = await service.playlist.remove(id, user);

			return res.json(deleted);
		} catch (error) {
			next(error);
		}
	});

export default router;
