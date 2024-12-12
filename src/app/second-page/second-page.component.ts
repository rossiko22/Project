import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-second-page',
  standalone: true,
  template: `
     <h1>Hello</h1>
  `,
  // styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  // constructor(private translate: TranslateService){}


  // switchLanguage(language: string){
  //   this.translate.use(language);
  // }
}
