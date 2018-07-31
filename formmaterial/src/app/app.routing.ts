import {Router,RouterModule,Routes,PreloadingStrategy,PreloadAllModules} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';


export const route : Routes = [
    {path : '',redirectTo : 'login',pathMatch :'full'},
	{path : 'login', component : LoginComponent}
];


export const routing : ModuleWithProviders = RouterModule.forRoot(route,{preloadingStrategy : PreloadAllModules});