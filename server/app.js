'use strict';

import Koa from 'koa';

import middleware from 'middleware';
import routerHandler from 'routes';

const app = new Koa();

app.use(middleware());
app.use(routerHandler());

app.listen(3000);
