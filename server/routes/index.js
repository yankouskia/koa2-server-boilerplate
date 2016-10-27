'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import dataRoute from './data';

export default function api() {
  const router = new Router();

  dataRoute(router);

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
