import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TradesmanService } from '../services/tradesman.service';
import { Router } from '@angular/router';
import { Language, TranslatePipe } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  currentLanguage: Language;
  tradesmanStatus: boolean;
  isLoginStatus: boolean;

  constructor(private languageService: LanguageService, private tradesmanService: TradesmanService,private loginService: LoginService, private router: Router){
    this.currentLanguage = languageService.getCurrentLanguage();
    this.tradesmanStatus = tradesmanService.getCurrentTradesmanStatus();
    this.isLoginStatus = loginService.getLoginStatus();
  }


  chooseService(status: boolean){
    this.loginService.setLoginStatus(status);
    if(status){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/register']);
    }
  }


}
