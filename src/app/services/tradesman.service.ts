import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradesmanService {
  
  isTradesman: boolean = false;

  getCurrentTradesmanStatus(): boolean{
    return this.isTradesman;
  }

  setCurrentTradesmanStatus(status: boolean): void{
    this.isTradesman = status;
  }
}
