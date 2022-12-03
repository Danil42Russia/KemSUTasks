import { Request, Response, Router } from 'express';
import users from '../data/users';
import { IUser, pick, randomIntFromInterval } from '@req/core';
import { getUser, ModelRequest, ModelResponse } from '../helpers';
import { CreateUser, INewUser, IUpdateUser, UpdateUser } from '../models';
import { pickAll } from '@req/core/src/helpers';

const router: Router = Router();

router.get('/', function(req: Request, res: Response<IUser[]>) {
  res.json(users);
});

router.get('/:id', function(req: Request, res: ModelResponse<IUser>) {
  const user = getUser(req.params.id);
  if (user == undefined) {
    res.status(404).json({});
  }

  res.json(user);
});

router.post('/', function(req: ModelRequest<CreateUser>, res: ModelResponse<INewUser>) {
  const body = pick(req.body, ['first_name', 'last_name', 'email']);

  const result: INewUser = {
    id: randomIntFromInterval(users.length, 100),
    ...body,
    created_at: new Date().toISOString(),
  };

  res.status(201).json(result);
});

router.patch('/:id', function(req: ModelRequest<UpdateUser>, res: ModelResponse<IUpdateUser>) {
  const user = getUser(req.params.id);
  if (user === undefined) {
    res.status(404).json({});
  }

  const body = pick(req.body, ['first_name', 'last_name', 'email']);

  const result: IUpdateUser = {
    ...user,
    ...body,
    updated_at: new Date().toISOString(),
  };

  res.status(200).json(result);
});

router.put('/:id', function(req: ModelRequest<UpdateUser>, res: ModelResponse<IUpdateUser>) {
  const user = getUser(req.params.id);
  if (user === undefined) {
    res.status(404).json({});
  }

  const body = pickAll(req.body, ['first_name', 'last_name', 'email']);

  const result: IUpdateUser = {
    ...user,
    ...body,
    updated_at: new Date().toISOString(),
  };

  res.status(200).json(result);
});

router.delete('/:id', function(req: Request, res: Response) {
  const user = getUser(req.params.id);
  if (user === undefined) {
    res.status(404).json({});
  }

  res.status(204).send();
});

export default router;
