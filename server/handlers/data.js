'use strict';

export async function get(ctx) {
  ctx.body = await Promise.resolve({ name: 'Alex' });
}

export async function add(ctx) {
  ctx.body = await Promise.resolve({ name: 'new Name' });
}
