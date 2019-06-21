import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Posts} from '../models/posts.model';

@Component({
  selector: 'app-show-rising',
  templateUrl: './show-rising.component.html',
  styleUrls: ['./show-rising.component.css']
})
export class ShowRisingComponent implements OnInit {

  title = 'reddit';
  // apps: AppComponent = new AppComponent();
  // masterPostList: Posts[] =  this.apps.showRising();

  ngOnInit() {
  }

}
