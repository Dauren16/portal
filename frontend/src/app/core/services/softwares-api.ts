import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISoftware } from '../interfaces/ISoftware';

@Injectable({
  providedIn: 'root',
})
export class SoftwaresApi {
  private http: HttpClient = inject(HttpClient);

  getSoftwares(): Observable<ISoftware[]> {
    return this.http.get<ISoftware[]>('/api/softwares').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить программы', error);
        return of([])
      })
    )
  }
  
}
