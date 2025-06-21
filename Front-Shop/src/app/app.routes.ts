import { Routes } from '@angular/router';
import { MainPageContainerComponent } from './features/user/pages/home/components/main-home/main-page-container.component';
import { UserRepresenterComponent } from './features/user/pages/user-representer/user-representer.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'User/Home-page',
        pathMatch: 'full',
    },
    {
        path: 'User',
        component: UserRepresenterComponent,
        children: [
          {
            path: 'Home-page',
            component: MainPageContainerComponent,
            title: 'Home Page',
          },
          {
            path: 'Login',
            component: LoginComponent,
            title: 'Login Page',
          },
          {
            path: 'Register',
            component: RegisterComponent,
            title: 'Register Page',
          },
        ],
      }
];
