import { IUser } from '@req/core';

export interface IEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  name: string;
  url: string;
  data?: IUser;
}

export interface IResponse {
  data: any;
  status?: number;
}
