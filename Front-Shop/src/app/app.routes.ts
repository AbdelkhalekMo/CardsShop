import { Routes } from '@angular/router';
import { MainHomeComponent } from './features/home/components/main-home/main-home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
    {  
        path: 'auth/login',
        component: LoginComponent,
        title: 'Main Home',
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        title: 'Register',
    },
];
