import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export const routes: Routes = [
    {path: 'resgistro', component: RegistroComponent},
    {path: 'iniciar-sesion', component: IniciarSesionComponent},
    {path: 'landing-page', component: LandingPageComponent}
];