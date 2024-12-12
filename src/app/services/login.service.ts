import { Injectable } from '@angular/core';
import { User, users } from '../first-page/models/testLoginObjects';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginStatus: boolean = true;


  getLoginStatus(): boolean{
    return this.isLoginStatus;
  }

  setLoginStatus(status: boolean): void{
    this.isLoginStatus = status;
  }

  checkLogin(obj: User){
    return users.find(user => user.email === obj.email && user.password === obj.password && user.isTradesman === obj.isTradesman) ? true : false;
  }
}
