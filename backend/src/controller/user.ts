import {Router} from 'express';

import service from '../service';

const router = Router();

router.get('/:entity', async (req, res, next) => {
  const entity = req.params.entity
  const userId = req.user.id

  try {
    const results = await service.user.search(
        userId,
        entity?.split(',') ?? [],
    );

    return res.json(results);
  } catch (error) {
    next(error);
  }
});

export default router;
