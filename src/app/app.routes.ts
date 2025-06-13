import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CursoComponent } from './curso/curso.component';
import { HorarioComponent } from './horario/horario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareaComponent } from './tarea/tarea.component';
import { TabCursosComponent } from './tab-cursos/tab-cursos.component';
import { PerfilComponent } from './perfil/perfil.component';


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'nav', component:NavComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'iniciar-sesion', component: IniciarSesionComponent},
    {path: 'home', component: HomeComponent},
    {path: 'curso', component: CursoComponent},
    {path: 'horario', component: HorarioComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'tarea', component: TareaComponent},
    {path: 'tab-cursos', component: TabCursosComponent},
    {path: 'perfil', component: PerfilComponent},
];