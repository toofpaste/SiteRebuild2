import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Posts} from '../models/posts.model';

@Component({
  selector: 'app-show-controversial',
  templateUrl: './show-controversial.component.html',
  styleUrls: ['./show-controversial.component.css']
})
export class ShowControversialComponent implements OnInit {
  title = 'reddit';
  apps: AppComponent = new AppComponent();
  masterPostList: Posts[] =  this.apps.showControversial();

  ngOnInit() {
  }

}
