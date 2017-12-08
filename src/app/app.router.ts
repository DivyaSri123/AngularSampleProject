import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from '../app/success/success.component'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
export const router: Routes = [
    {path: '', redirectTo: 'app', pathMatch:'full'},
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    
    { path: 'success', component: SuccessComponent, pathMatch:'full' },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);