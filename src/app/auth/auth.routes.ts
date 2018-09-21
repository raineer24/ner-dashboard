import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';
import { RoleGuardService } from '../core/guards/role.guard';
import { MembersComponent } from './components/members/members.component';
import { StaffmembersComponent } from './components/staffmembers/staffmembers.component';
import { MemberViewComponent } from '../auth/components/members/member-view/member-view.component';
export const AuthRoutes = [
    { path: 'auth/login', component: LoginComponent },
    {
        path: 'auth',
        component: AuthComponent, children:
        [
               
                {
                    path: 'members', component: MembersComponent, canActivate: [RoleGuardService], data: {
                        expectedRole: [1, 4, 9, 10],
                    } },
                {
                    path: 'staffmembers', component: StaffmembersComponent, canActivate: [RoleGuardService],
                    data: {
                        expectedRole: [1, 2, 4, 5, 6, 8, 11, 12, 13]
                    } },
                {
                    path: 'members/view/:id', component: MemberViewComponent, canActivate: [RoleGuardService],
                    data: {
                        expectedRole: [1, 2, 4, 5, 6, 8, 11, 12, 13]
                    }
                }   
        ],
        canActivate: [CanActivateViaAuthGuard],
    }
];
