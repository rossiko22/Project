import { Component } from '@angular/core';
import { Language } from './models/AvailableLanguages.model';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  providers: [TranslateService,
    {
      provide: TranslateLoader,
      useFactory: TranslateHttpLoader,
      deps: [HttpClient]
    }
  ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  constructor(private translateService: TranslateService){}

  languageSelected = false;

  selectedLanguage : Language | null = null;

  selectLanguage(language: Language){
    this.languageSelected = true;
    this.selectedLanguage = language;
  }
}
