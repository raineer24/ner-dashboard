import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALIDATORS, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../../core/services/auth.service';
@Component({
  selector: 'app-members-add-edit',
  templateUrl: './members-add-edit.component.html',
  styleUrls: ['./members-add-edit.component.scss']
})
export class MembersAddEditComponent implements OnInit {
  addEditMemberForm: FormGroup;
  operation: string;
  routeSubscription$: Subscription;
  activeUser: any;
  rolesList: Array<any> = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
    this.activeUser = JSON.parse(localStorage.getItem('selleruser'));
    this.routeSubscription$ = this.route.params.subscribe(
      (params: any) => {
        this.authService.getRolesList().subscribe((roleList) => {
          console.log(roleList);

          if (params.id) {
            this.operation ='Edit';
          }
          else {
            this.operation = 'Add';
          }
       });
      }
    );
  }

  initForm(): void {
    this.addEditMemberForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')])],
      'gender': ['', Validators.required],
      'prefix': ['+63', Validators.required],
      'month': ['', Validators.required],
      'day': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,2}')])],
      'year': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}')])],
    })
  }

  onSubmit(option?: string): void {
    const values = this.addEditMemberForm.value;

    if (this.addEditMemberForm.valid) {
      if(this.operation)
      console.log(values);
    }

    
  }
}
