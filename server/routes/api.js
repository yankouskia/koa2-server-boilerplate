'use strict';

import * as dataHandlers from 'handlers/data';
import * as staticHandlers from 'handlers/static';

export default function api(router) {
  router
    .get('/api/load', dataHandlers.load)
    .post('/api/save', dataHandlers.save);

  router
    .get('*', staticHandlers.render);
};
