import { Request, Response } from 'express';

export interface ModelRequest<ReqBody> extends Request {
  body: ReqBody;
}

type EmptyObject = {
  [K in any]: never;
};

type Send<ResBody, T = Response<ResBody>> = (body: ResBody) => T;

export interface ModelResponse<ResBody> extends Response {
  json: Send<ResBody | EmptyObject, this>;
}
