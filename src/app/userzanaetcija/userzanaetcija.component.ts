import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TradesmanService } from '../services/tradesman.service';

@Component({
  selector: 'app-userzanaetcija',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './userzanaetcija.component.html',
  styleUrl: './userzanaetcija.component.css'
})
export class UserzanaetcijaComponent {

  currentLanguage = this.languageService.getCurrentLanguage();


  constructor(private languageService: LanguageService, private tradesmanService: TradesmanService, private router: Router){}

  chooseService(tradesman: boolean): void{
    this.tradesmanService.setCurrentTradesmanStatus(tradesman);
    this.router.navigate(['/menu']);
    console.log(this.tradesmanService.getCurrentTradesmanStatus());
    
  }
}
