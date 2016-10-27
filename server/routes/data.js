'use strict';

import * as dataHandlers from 'handlers/data';

export default (router) => {
  router
    .get('/data', dataHandlers.get)
    .post('/data', dataHandlers.add);
};
