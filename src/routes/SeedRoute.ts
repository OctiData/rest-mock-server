import { Router } from 'express';
import { SeedController } from '../controllers/SeedController';
import { FirestoreCollections } from '../types/firestore';

export class SeedRoute {
  private seedController: SeedController;

  constructor(private readonly db: FirestoreCollections) {
    this.seedController = new SeedController(db);
  }

  createRouter(): Router {
    const router = Router();

    router.post('/init', this.seedController.init.bind(this.seedController));

    return router;
  }
}
