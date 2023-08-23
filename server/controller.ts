// Response Time
import { Request, Response } from 'express';

export interface Data {
  properties: {
    epoch: {
      description: number;
      type: string;
    };
  };
  required: string[];
  type: string;
}

export const getTime = (_req: Request, res: Response) => {
  const response: Data = {
    properties: {
      epoch: {
        description: Date.now(),
        type: 'number'
      }
    },
    required: ['epoch'],
    type: 'object'
  };

  try {
    res.status(200);
    res.send(response);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
};
