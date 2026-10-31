import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Lang } from '../enums/Lang';

const STORAGE_LANG = 'lang'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  constructor() {
    this.setLanguage(this._currentLanguage())
  }

  private http: HttpClient = inject(HttpClient);
  private _currentLanguage = signal<Lang>(localStorage.getItem(STORAGE_LANG) as Lang ?? Lang.RU);
  readonly currentLanguage = this._currentLanguage.asReadonly();

  private dictionary = signal<Record<string, string>>({})

  private loadDictionary(lang: Lang): void {
    this.http.get<Record<string, string>>(`/i18n/${lang}.json`).subscribe(result => this.dictionary.set(result))
  }

  setLanguage(lang: Lang): void {
    this._currentLanguage.set(lang)
    localStorage.setItem(STORAGE_LANG, lang)
    document.documentElement.lang = lang
    this.loadDictionary(lang)
  }

  translate(key: string): string {
    return this.dictionary()[key] ?? key
  }

  localize(ru: string, kz: string | null): string {
    if(this._currentLanguage() === Lang.KZ && kz) {
      return kz
    }
    return ru;
  }
}