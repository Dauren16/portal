import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISoftware } from '../interfaces/ISoftware';
import { ToastService } from './toast-service';
import { ToastType } from '../enums/ToastType';

@Injectable({
  providedIn: 'root',
})
export class SoftwaresApi {
  private http: HttpClient = inject(HttpClient);
  private toastService: ToastService = inject(ToastService);

  getSoftwares(): Observable<ISoftware[]> {
    return this.http.get<ISoftware[]>('/api/softwares').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить программы', error);
        this.toastService.addToast('Не удалось загрузить список программ', ToastType.ERROR)
        return of([])
      })
    )
  }
  
}
