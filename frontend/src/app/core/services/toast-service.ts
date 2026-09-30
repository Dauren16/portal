import { Injectable, signal } from '@angular/core';
import { IToast } from '../interfaces/IToast';
import { ToastType } from '../enums/ToastType';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts = signal<IToast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  private nextId: number = 0;

  addToast(message: string, type: ToastType): void {
    const newToast: IToast = { id : this.nextId++, message, type }
    this._toasts.update(_toasts => [ newToast, ..._toasts ])

    setTimeout(() => this.closeToast(newToast), 3000);
  }

  closeToast(selectedToast: IToast): void {
    this._toasts.update((element: IToast[]) => element.filter((toast: IToast) => toast.id !== selectedToast.id))
  }
}
