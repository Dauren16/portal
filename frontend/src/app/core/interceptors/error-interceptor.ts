import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast-service';
import { catchError, throwError } from 'rxjs';
import { ToastType } from '../enums/ToastType';

export function textByStatus(status: number): string {
  if (status >= 500) {
    return 'Ошибка на сервере, попробуйте позже'
  }
  switch (status) {
    case 0:
      return 'Нет связи с сервером. Проверьте подключение к сети';
    case 401:
      return 'Сессия истекла. Войдите снова';
    case 403:
      return 'Недостаточно прав для этого действия';
    case 404:
      return 'Запрашиваемые данные не найдены';
    default:
      return 'Что-то пошло не так. Попробуйте обновить страницу';
  }
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = textByStatus(error.status);
      toastService.addToast(message, ToastType.ERROR)
      return throwError(() => error)
    })
  )
};
