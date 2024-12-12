import { Routes } from '@angular/router';
import { ThirdPageComponent } from './third-page/third-page.component';
import { UserzanaetcijaComponent } from './userzanaetcija/userzanaetcija.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: ThirdPageComponent, pathMatch: 'full'},
    {path: 'choose', component:UserzanaetcijaComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'landing-page', component: LandingPageComponent},
    {path: '**', component: ThirdPageComponent},
];
