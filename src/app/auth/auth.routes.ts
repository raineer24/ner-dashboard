import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';
import { MembersComponent } from './components/members/members.component';
export const AuthRoutes = [
    { path: 'auth/login', component: LoginComponent },
    {
        path: 'auth',
        component: AuthComponent, children:
        [
               
                { path: 'members', component: MembersComponent },
        ],
        canActivate: [CanActivateViaAuthGuard],
    }
];
