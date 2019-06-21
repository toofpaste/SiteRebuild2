import { Injectable } from '@angular/core';
import { Posts } from './models/posts.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostsService {
  post: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.post = database.list('posts');
  }

  getPosts() {
    return this.post;
  }
}
