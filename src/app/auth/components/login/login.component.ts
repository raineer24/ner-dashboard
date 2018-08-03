import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
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
    console.log(this.userData);
  }
  profieView() {
   
   
      this.authService.view().subscribe(data => {
        this.userData = data;
        console.log(data.id);
      });
    
    
  }
}
