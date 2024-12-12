import { Routes } from '@angular/router';
import { ThirdPageComponent } from './third-page/third-page.component';
import { UserzanaetcijaComponent } from './userzanaetcija/userzanaetcija.component';

export const routes: Routes = [
    {path: '', component: ThirdPageComponent, pathMatch: 'full'},
    {path: 'choose', component:UserzanaetcijaComponent},
    {path: '**', component: ThirdPageComponent},
];
