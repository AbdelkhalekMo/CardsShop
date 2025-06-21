import { Routes } from '@angular/router';
import { MainPageContainerComponent } from './features/user/pages/home/components/main-home/main-page-container.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
    {  
        path: '',
        component:  MainPageContainerComponent,
        title: 'Main Page',
    },
    {  
        path: 'auth/login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        title: 'Register',
    },
];
