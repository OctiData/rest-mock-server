import { Request, Response } from 'express';
import { SeedService } from '../services/SeedService';
import { IGeneralResponse } from '../types/api';
import { FirestoreCollections } from '../types/firestore';

export class SeedController {
  private seedService: SeedService;

  constructor(private readonly db: FirestoreCollections) {
    this.seedService = new SeedService(db);
  }

  async init(_req: Request, res: Response<IGeneralResponse>): Promise<void> {
    try {
      const response = await this.seedService.init();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({
        status: 'fail',
        message: 'Internal Server Error',
      });
    }
  }
}
