import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ErrorService } from '../services/error.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationErrorService } from '../services/notification-error.service';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  const notificationMessageService = inject(NotificationErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage: string;
      if (error.error instanceof ErrorEvent) {
        errorMessage = errorService.getClientError(error);
        notificationMessageService.showMessage(errorMessage);
      } else {
        errorMessage = errorService.getServerError(error);
        notificationMessageService.showMessage(errorMessage);
      }
      return throwError(() => new Error(errorMessage));
    }),
  );
};
