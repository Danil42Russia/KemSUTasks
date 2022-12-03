import { Request, Response } from 'express';
import { IUser } from '@req/core';
import users from '../data/users';

export interface ModelRequest<T> extends Request {
  body: T;
}

type EmptyObject = {
  [K in any]: never;
};

export type ModelResponse<T> = Response<T | EmptyObject>;

export function getUser(userId: string | number): IUser | undefined {
  if (typeof userId === 'string') {
    userId = parseInt(userId);
  }

  if (isNaN(userId)) {
    return undefined;
  }

  return users.find((u) => u.id === userId);
}
