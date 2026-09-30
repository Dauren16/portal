import { Component, input } from '@angular/core';
import { ISoftware } from '../../core/interfaces/ISoftware';

@Component({
  selector: 'app-software-card',
  imports: [],
  templateUrl: './software-card.html',
  styleUrl: './software-card.scss',
})
export class SoftwareCard {
  software = input.required<ISoftware>()
}
