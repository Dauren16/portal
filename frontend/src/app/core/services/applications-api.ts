import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IApplication } from '../interfaces/IApplication';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsApi {
  private http: HttpClient = inject(HttpClient);

  getApplications(): Observable<IApplication[]> {
    return this.http.get<IApplication[]>('/api/applications').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить формы заявок',error);
        return of([])
      })
    )
  }
}
