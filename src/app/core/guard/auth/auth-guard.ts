import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from '../../services/auth/authentication';
import { Platform } from '../../services/platform/platform';

export const authGuard: CanActivateFn = (route, state) => {
  let auth = inject(Authentication);
  let router = inject(Router);
  let platform = inject(Platform);

  if (!platform.isBrowser()) {
    return true;
  }
  return auth.isLoggedIn() ? true : router.parseUrl('/login');
};
