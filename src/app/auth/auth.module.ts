import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutes as routes } from './auth.routes';
import { AuthComponent } from './auth.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';
import { MembersComponent } from './components/members/members.component';
import { TableModule } from 'primeng/table';
import { StaffmembersComponent } from './components/staffmembers/staffmembers.component';
import { RoleGuardService } from '../core/guards/role.guard';
import { MemberViewComponent } from './components/members/member-view/member-view.component';
import { MembersAddEditComponent } from './components/members/members-add-edit/members-add-edit.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        TableModule
    ],
    declarations: [
        LoginComponent,
        AuthComponent,
        MembersComponent,
        StaffmembersComponent,
        MemberViewComponent,
        MembersAddEditComponent
    ],
    exports: [
        AuthComponent
    ],
    providers: [
        CanActivateViaAuthGuard,
        RoleGuardService
    ]
   
})
export class AuthModule { }
