import { Router } from 'express';
import { ISeedController } from '../controllers/interfaces/ISeedController';

export class SeedRoute {
  constructor(private readonly seedController: ISeedController) {}

  createRouter(): Router {
    const router = Router();

    router.post('/init', this.seedController.init.bind(this.seedController));

    return router;
  }
}
