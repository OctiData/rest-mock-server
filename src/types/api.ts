import { User } from './entities/User';

export interface IGeneralResponse<T extends Record<string, any> = {}> {
  status: 'fail' | 'success';
  message: string;
  page?: number;
  pageSize?: number;
  total?: number;
}

export type UsersResponse = IGeneralResponse<{ users: User[] }>;
