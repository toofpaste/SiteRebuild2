import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Posts} from '../models/posts.model';

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  title = 'reddit';
  // apps: AppComponent = new AppComponent();
  // masterPostList: Posts[] =  this.apps.showNew();

  ngOnInit() {
  }

}
