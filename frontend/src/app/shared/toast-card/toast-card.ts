import { Component, computed, input, output } from '@angular/core';
import { IToast } from '../../core/interfaces/IToast';
import { TOAST_TITLES, ToastType } from '../../core/enums/ToastType';

@Component({
  selector: 'app-toast-card',
  imports: [],
  templateUrl: './toast-card.html',
  styleUrl: './toast-card.scss',
})
export class ToastCard {
  toast = input.required<IToast>();

  closed = output<void>()

  toastTitle = computed(() => TOAST_TITLES[this.toast().type])

  closeToast(): void {
    this.closed.emit()
  }
}
