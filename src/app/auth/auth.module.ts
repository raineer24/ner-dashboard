import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutes as routes } from './auth.routes';
import { AuthComponent } from './auth.component';
import { CanActivateViaAuthGuard } from '../core/guards/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [
        LoginComponent,
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    providers: [
        CanActivateViaAuthGuard
    ]
   
})
export class AuthModule { }
