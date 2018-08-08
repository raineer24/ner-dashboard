import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';
export const AuthRoutes = [
    { path: 'auth/login', component: LoginComponent },
    {
        path: 'auth',
        component: AuthComponent, children:
        [
                {
                    path: 'login',
                    component: LoginComponent,
                    canActivate: [CanActivateViaAuthGuard]
                    
                }
        ],
        canActivate: [CanActivateViaAuthGuard],
    }
];
