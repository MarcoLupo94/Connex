import express, { Router } from 'express';
import { getTime } from './controller';
import { Validator, ValidationError } from 'express-json-validator-middleware';

const router: Router = express.Router();
const { validate } = new Validator();

router.get('/time', validate({ body: './schemas/Time.json' }), getTime);

export default router;
