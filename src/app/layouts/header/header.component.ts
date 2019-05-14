import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../auth/shared/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser : any;
  constructor(private _authenticationService:AuthenticationService,private _router :Router) { 
  this._authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
       
  }

  ngOnInit() {
     
  }
 getFullName(){
   return this.currentUser.firstname+ " "+this.currentUser.lastname;
 }
 getUsers(){
   this._authenticationService.getUsers().subscribe((users)=>{
     console.log(users);
   })
 }
 logout(){
   this._authenticationService.logout();
   this._router.navigate(['/login']); 
 }


}
