import { Component, computed, inject, input } from '@angular/core';
import { ISystem } from '../../core/interfaces/ISystem';
import { LanguageService } from '../../core/services/language-service';

@Component({
  selector: 'app-system-card',
  imports: [],
  templateUrl: './system-card.html',
  styleUrl: './system-card.scss',
})
export class SystemCard {
  system = input.required<ISystem>();
  languageService: LanguageService = inject(LanguageService);

  title = computed(() => this.languageService.localize(this.system().title, this.system ().titleKz)
  )
}
