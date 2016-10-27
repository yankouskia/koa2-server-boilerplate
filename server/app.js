'use strict';

import Koa from 'koa';

import middleware from 'middleware';
import routerHandler from 'routes';
import { initStorage } from 'utils/serverStorage';

const app = new Koa();

initStorage();
app.use(middleware());
app.use(routerHandler());

app.listen(3000);
