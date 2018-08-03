import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
     {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
    
];
