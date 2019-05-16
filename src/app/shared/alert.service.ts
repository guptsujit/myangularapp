import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor() { }

  success(message: string, keepAfterNavigationChange = false) {
    this.subject.next({type : 'success',text : message});
  }
  error(message: string, keepAfterNavigationChange = false) {
   this.subject.next({type : 'error',text : message});
  }
  getMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
