import { Component, OnInit } from '@angular/core';
import {FormArray,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
  constructor(private fb:FormBuilder,private _authenticationService:AuthenticationService,private _router :Router) { }

  ngOnInit() {
    this.buildForm();
  }
 buildForm(){
  this.loginForm = this.fb.group({
    email : ['',Validators.required,Validators.email],
    password : ['',Validators.required]
  })
 }
  processLogin(){ 
   if(this.loginForm.invalid){
     return;
   }
   this._authenticationService.login(this.loginForm.value.email,this.loginForm.value.password)
   .subscribe((response)=>{
     this._authenticationService.setAuthData(response);
     this._router.navigate(['/home']);
   },(error)=>{
     console.log(error);
   });
  
  }
}
