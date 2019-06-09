'use strict';

import { Router } from 'express';

import ItemByIdRoute from './itemById';
import ItemsByQuery from './itemsByQuery';

const ItemsRouter = new Router();

//API: /api/items
ItemsRouter.get('/:id', ItemByIdRoute);
ItemsRouter.get('/', ItemsByQuery);

export default ItemsRouter;