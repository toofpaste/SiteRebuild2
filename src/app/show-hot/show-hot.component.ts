import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Posts} from '../models/posts.model';

@Component({
  selector: 'app-show-hot',
  templateUrl: './show-hot.component.html',
  styleUrls: ['./show-hot.component.css']
})
export class ShowHotComponent implements OnInit {
  title = 'reddit';
  apps: AppComponent = new AppComponent();
  masterPostList: Posts[] =  this.apps.showHot();
  ngOnInit() {
  }

}
