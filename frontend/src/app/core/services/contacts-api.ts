import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IContact } from '../interfaces/IContact';

@Injectable({
  providedIn: 'root',
})
export class ContactsApi {
  private http: HttpClient = inject(HttpClient)

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('/api/contacts').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить данные', error)
        return of([])
      })
    )
  }
}
