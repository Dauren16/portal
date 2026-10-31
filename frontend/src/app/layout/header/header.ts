import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate-pipe';
import { LanguageService } from '../../core/services/language-service';
import { Lang } from '../../core/enums/Lang';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeList()',
  },
})
export class Header {
  protected readonly title = signal('Единое окно информационных ресурсов');
  protected languageService: LanguageService = inject(LanguageService);
  languageEnum: typeof Lang = Lang;
  openList = signal(false);
  protected readonly languages = Object.values(Lang);
  private languageBox = viewChild<ElementRef<HTMLElement>>('languageBox');

  toggleList(): void {
    this.openList.update(value => !value)
  }

  selectLanguage(lang: Lang): void {
    this.languageService.setLanguage(lang)
    this.openList.set(false)
  }

  closeList(): void {
    this.openList.set(false);
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.openList()) {
      return;
    }

    const box = this.languageBox()?.nativeElement;
    const clickedInside = box?.contains(event.target as Node);

    if (!clickedInside) {
      this.closeList();
    }
  }
}
