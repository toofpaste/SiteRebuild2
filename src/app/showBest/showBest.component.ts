import {Component} from '@angular/core';
import {Posts} from '../models/posts.model';
import {AppComponent} from '../app.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-show-best',
  templateUrl: './showBest.component.html',
  styleUrls: ['./showBest.component.css']
})
export class ShowBestComponent {
  title = 'reddit';
  // apps: AppComponent = new AppComponent();
  // masterPostList: Posts[] =  this.apps.getPosts();
}

// public title: string
// public time: number
// public username: string
// public commentNum: number
// public comments: string[]
// public upvotes: number
// public link: string
// public thumbnail: string
