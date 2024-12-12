import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage: 'en' | 'mk' = 'en';

  constructor(private translate: TranslateService){ 
    this.translate.setDefaultLang(this.currentLanguage); 
    this.translate.use(this.currentLanguage); 
  }

  getCurrentLanguage(): 'en' | 'mk' {
    return this.currentLanguage;
  }

  setCurrentLanguage(lang: 'en' | 'mk') {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }
}
