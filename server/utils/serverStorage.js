'use strict';

import storage from 'node-persist';

export function initStorage() {
  storage.init({
      dir:'local_db',
      stringify: JSON.stringify,
      parse: JSON.parse,
      encoding: 'utf8',
  });
};

export async function setItem(key, value) {
  await storage.setItem(key, value);
};

export async function getItem(key, ) {
  return await storage.getItem('data');
}
