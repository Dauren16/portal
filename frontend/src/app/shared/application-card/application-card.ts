import { Component, input } from '@angular/core';
import { IApplication } from '../../core/interfaces/IApplication';

@Component({
  selector: 'app-application-card',
  imports: [],
  templateUrl: './application-card.html',
  styleUrl: './application-card.scss',
})
export class ApplicationCard {
  application = input.required<IApplication>();
}
