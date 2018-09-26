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
      username: ['', Validators.required]
    })
  }
}
