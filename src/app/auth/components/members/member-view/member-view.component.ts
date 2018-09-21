import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit {
  sub: any;
  activeUser: any;
  constructor(private authService: AuthService,
    private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.activeUser = JSON.parse(localStorage.getItem('selleruser'));
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.authService.views(id).subscribe(user => this.activeUser = user);
    });
    
  }

}
