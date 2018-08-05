import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  constructor(private authService: AuthService,
              private route: ActivatedRoute) { }
  userData: {
    'id': string,
    'email': string,
    'lastName': string,
    'firstName': string,
    'gender': string,
    'mobileNumber': string,
    'birthdate': string,
  };
  ngOnInit() {
    this.profieView();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  profieView() {
   
   
      this.authService.view().subscribe(data => {
        this.userData = data;
        console.log(data.id);
      });
    
    
  }
}
