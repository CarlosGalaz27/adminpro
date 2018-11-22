import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './login/register.component';

const app_route : Routes = [
	{path: 'login', component : LoginComponent },
	{path: 'register', component : RegisterComponent },
	{path: '**', component : NopagefoundComponent }
];


export const APP_ROUTE = RouterModule.forRoot(app_route, {useHash : true});