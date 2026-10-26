import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('Единое окно информационных ресурсов');

  softwaresPage: string = 'Программные обеспечения';
  contactsPage: string = 'Контакты';
  homePage: string = 'Главная';
  calendarPage: string = 'Календарь';
}
