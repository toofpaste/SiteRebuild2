import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // apps: AppComponent = new AppComponent();
  // userName = this.apps.getUserName();
  // postKarma = this.apps.getPostKarma();
  // commentKarma = this.apps.getCommentKarma();
  constructor() { }

  ngOnInit() {
  }

}
