// Response Time
import { Request, Response } from 'express';

export interface Data {
  epoch: number;
}

export const getTime = (_req: Request, res: Response) => {
  const response: Data = {
    epoch: Date.now()
  };

  try {
    res.status(200);
    res.send(response);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
};
