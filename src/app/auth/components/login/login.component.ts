import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../../../interfaces';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  returnUrl: string;
  loginSubs: Subscription;
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router, 
              private fb: FormBuilder,
              private store: Store<AppState>) { }
  
  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const values = this.signInForm.value;
    const data = {
      'username': values.email,
      'password': values.password
    };
    const keys = Object.keys(values);
    this.loginSubs = this.authService.login(data).subscribe(data => {
      const error = data.error;
      const user = JSON.parse(localStorage.getItem('user'));
      window.location.href = this.returnUrl;
    });
  }

  initForm() {
    const email = '';
    const password = '';

    this.signInForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required]
    });
  }
  
}
