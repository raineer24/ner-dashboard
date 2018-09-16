import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../core/services/auth.service';


@Injectable()
export class RoleGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const jwtHelper: JwtHelperService = new JwtHelperService();
        const expectedRoles = route.data.expectedRole;
        const userData = JSON.parse(localStorage.getItem('selleruser'));
        const tokenPayload = jwtHelper.decodeToken(userData.token);

        if (!this.authService.isAuthenticated() || !expectedRoles.includes(this.authService.getUserRole())) {
            this.router.navigate(['/admin/login']);
            return false;
        }
        return true;
    }
}
