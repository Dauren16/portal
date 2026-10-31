import { Component, computed, inject, input } from '@angular/core';
import { IContact } from '../../core/interfaces/IContact';
import { LanguageService } from '../../core/services/language-service';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  contact = input.required<IContact>()
  languageService: LanguageService = inject(LanguageService);

  title = computed(() => this.languageService.localize(this.contact().title, this.contact().titleKz))
}
