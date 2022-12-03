import { IUser } from '@req/core';

export interface INewUser extends IUser {
  created_at: string;
}

export interface IUpdateUser extends IUser {
  updated_at: string;
}

export type CreateUser = Omit<IUser, 'id'>;
export type UpdateUser = Omit<IUser, 'id'>;
