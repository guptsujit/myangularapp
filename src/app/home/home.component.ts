import { Component, OnInit ,Pipe} from '@angular/core';

@Pipe({name: 'exponentialStrength'})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
