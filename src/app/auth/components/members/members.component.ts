import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  users: any;
  userId: number;
  usersSub: Subscription;
  sub: any;
  activeUser: any;
  // userData: {
  //   'id': string,
  //   'email': string,
  //   'lastName': string,
  //   'firstName': string,
  //   'gender': string,
  //   'mobileNumber': string,
  //   'birthdate': string,
  // };

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.usersSub = this.authService.view().subscribe(users => {
      this.users = users;
      console.log(users);
     
    });
    
   
   
  }

}
