import { Component, computed, inject, input } from '@angular/core';
import { IApplication } from '../../core/interfaces/IApplication';
import { LanguageService } from '../../core/services/language-service';

@Component({
  selector: 'app-application-card',
  imports: [],
  templateUrl: './application-card.html',
  styleUrl: './application-card.scss',
})
export class ApplicationCard {
  application = input.required<IApplication>();
  languageService: LanguageService = inject(LanguageService);

  title = computed(() => this.languageService.localize(this.application().title, this.application().titleKz))
}
