'use strict';

import * as dataHandlers from 'handlers/data';

export default (router) => {
  router
    .get('/load', dataHandlers.load)
    .post('/save', dataHandlers.save);
};
