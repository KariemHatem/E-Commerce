import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if running in browser
  const isBrowser = typeof window !== 'undefined';

  const token = isBrowser ? localStorage.getItem('userToken') : null;

  const newReq = req.clone({
    setHeaders: token ? { token } : {},
  });

  return next(newReq);
};
