import { Component, OnInit } from '@angular/core';
import {Posts} from '../models/posts.model';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-show-top',
  templateUrl: './show-top.component.html',
  styleUrls: ['./show-top.component.css']
})
export class ShowTopComponent implements OnInit {
  title = 'reddit';
  apps: AppComponent = new AppComponent();
  masterPostList: Posts[] =  this.apps.showTop();

    ngOnInit() {
    }

}
