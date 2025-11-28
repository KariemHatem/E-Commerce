import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // Hadle Error
  return next(req).pipe(
    catchError((error) => {
      console.log('Error Interceptor');
      console.log(error);

      return throwError(() => error);
    })
  );
};
