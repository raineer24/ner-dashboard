import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
     {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
    
];
