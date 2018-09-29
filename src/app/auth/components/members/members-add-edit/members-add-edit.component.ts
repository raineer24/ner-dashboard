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
    console.log(this.activeUser.role_id);
    this.routeSubscription$ = this.route.params.subscribe(
      (params: any) => {
        this.authService.getRolesList().subscribe((roleList) => {
          console.log(roleList);
          switch  (this.activeUser.role_id) {
            case 1: //EosDev
              this.rolesList = roleList
              break;
          }
          if (params.id) {
            this.operation ='Edit';
          }
          else {
            this.operation = 'Add';
            this.addEditMemberForm.patchValue({
              role: 0,
            });
          }
       });
      }
    );
  }
  ngOnDestroy() {
    this.routeSubscription$.unsubscribe();
  }

  initForm(): void {
    this.addEditMemberForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      
    })
  }

  onSubmit(option?: string): void {
    const values = this.addEditMemberForm.value;
    
    if (this.addEditMemberForm.valid) {
      if(this.operation == 'Add' ) {
        const data = {
          'lastName': values.lastName,
          'firstName': values.firstName,
          'email': values.email,
        }
        this.authService.register(data).subscribe(response => {
          if (response.message == 'Saved') {
            console.log(response.message);
            if (option === 'Add') {
              console.log('add');
            } else {
              this.initForm();
            }
          }
        });
      } else {
        console.log('edit');
      }
      
    } else {
      const keys = Object.keys(values);
      console.log(keys);
      console.log('error. not saving');
    }

    
  }
}
