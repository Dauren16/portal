import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IContact } from '../interfaces/IContact';
import { ToastService } from './toast-service';
import { ToastType } from '../enums/ToastType';

@Injectable({
  providedIn: 'root',
})
export class ContactsApi {
  private http: HttpClient = inject(HttpClient);
  private toastService: ToastService = inject(ToastService);

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('/api/contacts').pipe(
      catchError((error) => {
        console.error('Не удалось загрузить контакты', error);
        this.toastService.addToast('Не удалось загрузить список контактов', ToastType.ERROR);
        return of([])
      })
    )
  }
}
