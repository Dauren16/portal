import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ToastService } from './core/services/toast-service';
import { ToastCard } from './shared/toast-card/toast-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ToastCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  toastService: ToastService = inject(ToastService);
}
