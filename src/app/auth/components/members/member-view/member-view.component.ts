import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
  routeSubscription$: Subscription;
  sub: any;
  activeUser: any[];
  constructor(private authService: AuthService,
    private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    // this.authService.views(this.route.snapshot.params.id).subscribe(users => {

    //   this.activeUser = users;
    //   console.log(this.activeUser);
    // });
    this.routeSubscription$ = this.route.params.subscribe(
      (params: any) => {
        const memberId = params['id'];
        this.authService.views(memberId).subscribe(sub => {
          this.sub = sub;
          console.log(this.sub);
        }
          
        )
      }
    );
    
  }

}
