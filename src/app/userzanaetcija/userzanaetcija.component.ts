import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-userzanaetcija',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './userzanaetcija.component.html',
  styleUrl: './userzanaetcija.component.css'
})
export class UserzanaetcijaComponent {

  currentLanguage = this.languageService.getCurrentLanguage();
  constructor(private languageService: LanguageService){}

}
