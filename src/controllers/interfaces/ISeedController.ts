import { Request, Response } from 'express';
import { IGeneralResponse } from '../../types/api';

export interface ISeedController {
  init(req: Request, res: Response<IGeneralResponse>): Promise<void>;
}
