'use strict';

import { getItem, setItem } from 'utils/serverStorage';

export async function load(ctx) {
  const data = await getItem('data');
  ctx.body = { data };
};

export async function save(ctx) {
  const data = ctx.request.body;
  await setItem('data', data);
  ctx.body = { status: 'ok' };
};
