import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  message: any;
  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.authService.getMovies(this.message);
    console.log(this.message);
  }
}
