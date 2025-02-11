import { IGeneralResponse } from '../../types/api';

export interface ISeedService {
  init(): Promise<IGeneralResponse>;
}
