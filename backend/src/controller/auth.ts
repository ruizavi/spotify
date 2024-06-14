import { Router } from "express";
import service from "../service";

const router = Router();

router
	.post("/signup", async (req, res, next) => {
		const body = req.body;

		try {
			const user = await service.auth.signup(body);

			return res.json(user);
		} catch (error) {
			console.log(error)
			next(error);
		}
	})
	.post("/signin", async (req, res, next) => {
		const body = req.body;

		try {
			const response = await service.auth.singin(body);

			res.set("Authorization", `Auth ${response.token}`);

			return res.json(response);
		} catch (error) {
			next(error);
		}
	});

export default router;
