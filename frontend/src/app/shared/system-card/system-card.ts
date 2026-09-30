import { Component, input } from '@angular/core';
import { ISystem } from '../../core/interfaces/ISystem';

@Component({
  selector: 'app-system-card',
  imports: [],
  templateUrl: './system-card.html',
  styleUrl: './system-card.scss',
})
export class SystemCard {
  system = input.required<ISystem>()
}
