import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  users: any;
  usersSub: Subscription;
  userData: {
    
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.usersSub = this.authService.view().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}
