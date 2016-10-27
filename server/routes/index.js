'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import initApi from './api';

export default function routesHandler() {
  const router = new Router();
  initApi(router);

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
};
