import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        // Ruta por defecto al inicializar la página
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", component: HomeComponent
    },
    {
        // Ruta por defecto cuando la url sea incorrecta/ no encontrada
        path: "**", component: PageNotFoundComponent
    }
];
