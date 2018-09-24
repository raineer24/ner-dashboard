import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
   
    userData: any;
    isCollapsed: boolean = true;
    menuItems = [
        {
            name: "Members",
            routerLink: "/auth/members",
            type: 'main',
            rolesRequired: [1, 4, 9, 10],
        },
        {
            name: "Staffmembers",
            routerLink: "/auth/staffmembers",
            type: 'main',
            rolesRequired: [1, 2, 4, 5, 6, 8, 11, 12, 13],
        },
       
    ]
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('selleruser'));
    }
    getMenu() {
        const userRole = this.authService.getUserRole();
        return this.menuItems.filter(
            menuItem => menuItem.rolesRequired.includes(userRole)
        )
    }
}
