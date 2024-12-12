import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TradesmanService } from '../services/tradesman.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Language } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { User } from '../first-page/models/testLoginObjects';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = undefined as unknown as FormGroup;


  //We need to make default value here , or as i know because it is better this way than initilazing for example in menu.component.ts directly in constructor
  currentLanguage: Language = 'mk';
  tradesmanStatus: boolean = true;
  isLoginStatus: boolean = true;
  error:boolean = false;


  constructor(private languageService: LanguageService, private tradesmanService: TradesmanService,private formBuilder: FormBuilder, private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.tradesmanStatus = this.tradesmanService.getCurrentTradesmanStatus();
    this.isLoginStatus = this.loginService.getLoginStatus();
    console.log(this.currentLanguage, this.tradesmanStatus, this.isLoginStatus);

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  checkLogin(){
   const obj: User = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password,
    isTradesman: this.tradesmanStatus
   }

   const status = this.loginService.checkLogin(obj);
   console.log(status);

   if(status){
    this.router.navigate(['landing-page'])
    this.error = false;
   }else{
    // this.router.navigate([''])
    this.error = true;
   }
   
  }
}
