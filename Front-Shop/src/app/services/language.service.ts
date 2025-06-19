import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private languageSubject = new BehaviorSubject<'ar' | 'en'>(this.getInitialLanguage());
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: 'ar' | 'en') {
    this.languageSubject.next(lang);
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getLanguage(): 'ar' | 'en' {
    return this.languageSubject.value;
  }

  private getInitialLanguage(): 'ar' | 'en' {
    const saved = localStorage.getItem('selectedLanguage');
    return saved === 'en' ? 'en' : 'ar';
  }
}
