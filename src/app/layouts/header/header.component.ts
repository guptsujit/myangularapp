import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/shared/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  fullname: any;
  subscription: Subscription;
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {


  }

  ngOnInit() {
    this._authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
 
    });
  }
  getFullName() {
    if (this.currentUser) {
      return this.currentUser.user.firstname + " " + this.currentUser.user.lastname;
    }
  }
  getUsers() {
    this._authenticationService.getUsers().subscribe((users) => {
      console.log(users);
    })
  }
  logout() {
    this._authenticationService.logout();
    this._router.navigate(['/login']);
  }


}
