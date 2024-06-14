import { Router } from "express";
import service from "../service";

const router = Router();

router.get("/", async (req, res, next) => {
	const { search = "", entity } = <{ search: string; entity: string }>req.query;
	try {
		const results = await service.search.search(
			search,
			entity?.split(",") ?? [],
		);

		return res.json(results);
	} catch (error) {
		next(error);
	}
});

export default router;
