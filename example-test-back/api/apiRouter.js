'use strict';

import { Router } from 'express';
import ItemRouter from './items/items';

const ApiRouter = Router();

ApiRouter.use('/items', ItemRouter);

export default ApiRouter;