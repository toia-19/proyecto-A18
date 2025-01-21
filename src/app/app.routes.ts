import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
    {
        // Ruta por defecto al inicializar la página
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        // Ruta por defecto cuando la url sea incorrecta/ no encontrada
        path: "**", component: PageNotFoundComponent
    }
];
