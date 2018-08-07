import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';

export const AuthRoutes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'auth',
        component: AuthComponent
    },
];
