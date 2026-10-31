import { inject, Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../core/services/language-service';

@Pipe({
  name: 't',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  languageService: LanguageService = inject(LanguageService);

  transform(key: string): string {
    return this.languageService.translate(key)
  }
}
