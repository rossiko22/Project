import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent {


  constructor(private languageService: LanguageService, private router: Router){}
  
  switchLanguage(lang: 'en' | 'mk') { 
    this.languageService.setCurrentLanguage(lang);
    this.router.navigate(['/choose']);
   }
}
