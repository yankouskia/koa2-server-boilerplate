'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import initializeApi from './api';

export default function routesHandler() {
  const router = new Router();
  initializeApi(router);

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
