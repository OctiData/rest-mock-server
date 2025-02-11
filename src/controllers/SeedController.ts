import { Request, Response } from 'express';
import { IGeneralResponse } from '../types/api';
import { ISeedController } from './interfaces/ISeedController';
import { ISeedService } from '../services/interfaces/ISeedService';

export class SeedController implements ISeedController {
  constructor(private readonly seedService: ISeedService) {}

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
