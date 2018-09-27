import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-members-add-edit',
  templateUrl: './members-add-edit.component.html',
  styleUrls: ['./members-add-edit.component.scss']
})
export class MembersAddEditComponent implements OnInit {
  addEditMemberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
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
    console.log(values);
  }
}
