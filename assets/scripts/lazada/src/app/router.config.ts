import { UIRouter, Category } from '@uirouter/core';

export function routerConfigFn(router: UIRouter) {
  router.trace.enable(Category.TRANSITION);
}