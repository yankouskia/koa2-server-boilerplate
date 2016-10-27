'use strict';

export async function load(ctx) {
  ctx.body = await Promise.resolve({ name: 'Alex' });
}

export async function save(ctx) {
  ctx.body = await Promise.resolve({ name: 'new Name' });
}
