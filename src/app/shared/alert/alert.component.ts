import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  message: any;
  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this._alertService.getMessage().subscribe(message => {
       console.log(message)
      if(!navigator.onLine){
        this.message = "No enternet connection";
      }
      if (message.text instanceof HttpErrorResponse) {
          this.message = message;
      }else{
        this.message = "Something went wrong in client side";
      }
     
      console.log(message.type)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
