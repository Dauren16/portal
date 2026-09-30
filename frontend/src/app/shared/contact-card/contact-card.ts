import { Component, input } from '@angular/core';
import { IContact } from '../../core/interfaces/IContact';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  contact = input.required<IContact>()
}
