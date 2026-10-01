import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISystem } from '../interfaces/ISystem';
import { ToastService } from './toast-service';
import { ToastType } from '../enums/ToastType';

@Injectable({
  providedIn: 'root',
})
export class SystemsApi {
  private http: HttpClient = inject(HttpClient)

  getSystems(): Observable<ISystem[]> {
    return this.http.get<ISystem[]>('/api/systems').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить системы', error);
        return of([])
      })
    )
  }
  
}
