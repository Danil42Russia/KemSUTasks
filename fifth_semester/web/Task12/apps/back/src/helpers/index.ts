import { IUser } from '@req/core';
import users from '../data/users';

export function getUser(userId: string | number | undefined): IUser | undefined {
  if (userId === undefined) {
    return undefined;
  }

  if (typeof userId === 'string') {
    userId = parseInt(userId);
  }

  if (isNaN(userId)) {
    return undefined;
  }

  return users.find((user) => user.id === userId);
}

export * from './express';
