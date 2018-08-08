import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../../../interfaces';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../environments/environment';
import { getAuthStatus } from '../../reducers/selectors';
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
    private store: Store<AppState>) { this.redirectIfUserLoggedIn();}
  
  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
   
    console.log(window.location.href);
  }

  onSubmit() {
    const values = this.signInForm.value;
    const data = {
      'username': values.email,
      'password': values.password
    };
    const keys = Object.keys(values);

    if (this.signInForm.valid) {
      this.loginSubs = this.authService.login(data).subscribe(data => {
        if (data.message == 'Found') {
          this.router.navigate(['/auth']);
          console.log(window.location.href);
          
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signInForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
    
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signInForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }

  initForm() {
    const email = '';
    const password = '';

    this.signInForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required]
    });
  }

  redirectIfUserLoggedIn() {
    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) { this.router.navigate([this.returnUrl]); }
      }
    );
  }
  
}
