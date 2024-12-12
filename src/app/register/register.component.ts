import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language } from '../models/language.models';
import { LanguageService } from '../services/language.service';
import { TradesmanService } from '../services/tradesman.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm: FormGroup = undefined as unknown as FormGroup;
  
    //We need to make default value here , or as i know because it is better this way than initilazing for example in menu.component.ts directly in constructor
    currentLanguage: Language = 'mk';
    tradesmanStatus: boolean = true;
    isLoginStatus: boolean = true;
  

    options = [
      {value: "Option 1", title: "Option 1"},
      {value: "Option 1", title: "Option 1"},
      {value: "Option 1", title: "Option 1"},
      {value: "Option 1", title: "Option 1"}
    ]
  
    constructor(private languageService: LanguageService, private tradesmanService: TradesmanService,private formBuilder: FormBuilder, private loginService: LoginService, private router: Router){}
  
    ngOnInit(): void {
      this.currentLanguage = this.languageService.getCurrentLanguage();
      this.tradesmanStatus = this.tradesmanService.getCurrentTradesmanStatus();
      this.isLoginStatus = this.loginService.getLoginStatus();
      console.log(this.currentLanguage, this.tradesmanStatus, this.isLoginStatus);
  
      this.registerForm = this.formBuilder.group({
        email: ['', Validators.required],
        contactEmail: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        option: ['', Validators.required],
        photo: ['', Validators.required],
      })
    }

    onSubmit(){
      console.log(this.registerForm);
      
    }
}
