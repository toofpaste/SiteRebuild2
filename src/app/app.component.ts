import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Posts} from './models/posts.model';
import {PostsService} from './posts.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService]
})
@Injectable()
export class AppComponent{
  item: FirebaseListObservable<any[]>;
  constructor(private postService: PostsService){
    this.item = postService.getPosts();
    // this.item.subscribe(items => {
    //
    // });
  }

  title = 'Reddit';
  postKarma = '5,432';
  commentKarma = '9,234';
  myUserName = 'XxXTheBestUserXxX';
  // tslint:disable-next-line:max-line-length
  comments: string[] = ['LOL', 'ok then', 'i see how it is', 'not a bad job to be honest', 'could be worse', 'honestly its hard for me to poop', 'why did you comment that', 'im not sure what else to add here', 'i might add some child comments to make it all look nice', 'LOL', 'ok then', 'i see how it is', 'not a bad job to be honest', 'could be worse', 'honestly its hard for me to poop', 'why did you comment that', 'im not sure what else to add here', 'i might add some child comments to make it all look nice', 'LOL', 'ok then', 'i see how it is', 'not a bad job to be honest', 'could be worse', 'honestly its hard for me to poop', 'why did you comment that', 'im not sure what else to add here', 'i might add some child comments to make it all look nice', 'LOL', 'ok then', 'i see how it is', 'not a bad job to be honest', 'could be worse', 'honestly its hard for me to poop', 'why did you comment that', 'im not sure what else to add here', 'i might add some child comments to make it all look nice', 'LOL', 'ok then', 'i see how it is', 'not a bad job to be honest', 'could be worse', 'honestly its hard for me to poop', 'why did you comment that', 'im not sure what else to add here', 'i might add some child comments to make it all look nice'];
  masterPostList: Posts[] = [
    new Posts(
      'Teachers of reddit, what are some of the weirdest things you’ve confiscated from a student?',
      9,
      'User1',
      135,
      this.comments,
      1300,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/sVvV1fq.jpg',
      'r/nba'),
    new Posts(
      'A life size inflatable party boat!',
      5,
      'User2',
      135,
      this.comments,
      300,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/g5SDPRd.jpg',
      'r/warriors'),
    new Posts(
      'Deep-Faked Jon Snow apologies for Game of Thrones Season 8',
      5,
      'User2',
      235,
      this.comments,
      300,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/Nluzapw.jpg',
      'r/Portland'),
    new Posts(
      'Cheesy Chicken Drumstick Poppers',
      1,
      'User3',
      1035,
      this.comments,
      3020,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/BISeOkk.png',
      'r/tifu'),
    new Posts(
      'Ohtani has hit for the cycle against the Rays',
      11,
      'User4',
      6035,
      this.comments,
      320,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/Tszic45.png',
      'r/youtubehaiku'),
    new Posts(
      // tslint:disable-next-line:max-line-length
      'Once Stalled, A Cigarette Tax Hike Is Moving In Oregon Capitol -- Would raise taxes on cigarettes from $1.33 per pack to $3.33 per pack',
      20,
      'User5',
      35,
      this.comments,
      7732,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/Jhjulrz.jpg',
      'r/dataisbeautiful'),
    new Posts(
      'TIFU by not openning a gift for 1.5 years',
      2,
      'User6',
      315,
      this.comments,
      7232,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/lbxvdDG.jpg',
      'r/gifs'),
    new Posts(
      'Why there is no cat food with mouse flavour?',
      6,
      'User7',
      315,
      this.comments,
      7,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/62R6k5O.jpg',
      'r/pics'),
    new Posts(
      'We Read 150 Privacy Policies. They Were an Incomprehensible Disaster.',
      2,
      'User8',
      315,
      this.comments,
      28337,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/Bv8GpYv.jpg',
      'r/yesyesyesno'),
    new Posts(
      'ULPT: Get a free full medical work up by pretending you want to donate a kidney to an anonymous recipient then change your mind',
      3,
      'User9',
      335,
      this.comments,
      8337,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/xAMvryS.jpg',
      'r/unethicallifeprotips'),
    new Posts(
      'what is this',
      19,
      'User10',
      3385,
      this.comments,
      2937,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/iHTPCUu.jpg',
      'r/whatisthisthing'),
    new Posts(
      'Where’s a good spot in Lahaina to catch the NBA Finals?',
      11,
      'User11',
      85,
      this.comments,
      81,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/JDT7EHK.jpg',
      'r/oddlysatisfying'),
    new Posts(
      'Made my first proper survival base as a bunker in a mountain',
      9,
      'User12',
      85,
      this.comments,
      811,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/UglSAL1.jpg',
      'r/spaceengineers'),
    new Posts(
      'Still amazing without the effects',
      19,
      'User1',
      35,
      this.comments,
      1356,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/L8oCVzE.jpg',
      'r/SFGiants'),
    new Posts(
      'was trying to show to a friend how controls work, did a pretty good 1min line',
      3,
      'User2',
      130,
      this.comments,
      3020,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/eWPdY2H.jpg',
      'r/pics'),
    new Posts(
      'Lazy God',
      19,
      'User2',
      535,
      this.comments,
      2983,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/gINHgOK.jpg',
      'r/jesuschristreddit'),
    new Posts(
      'LED strip that responds to the colors on the tv',
      1,
      'User3',
      1335,
      this.comments,
      5020,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/IG23N82.jpg',
      'r/holdmycosmo'),
    new Posts(
      '[Question] How strong is the anti-vaccination movement in your country?',
      13,
      'User4',
      335,
      this.comments,
      3290,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/MN7Hren.jpg',
      'r/holdmybeer'),
    new Posts(
      // tslint:disable-next-line:max-line-length
      'They just don’t understand ',
      23,
      'User5',
      61,
      this.comments,
      772,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/lYCITwp.jpg',
      'r/holdmyfeedingtube'),
    new Posts(
      'Conan Announces His Trip To Ghana',
      1,
      'User6',
      745,
      this.comments,
      9824,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/q3Dmiuw.jpg',
      'r/holdmyredbull'),
    new Posts(
      'This man slashing wood.',
      3,
      'User7',
      115,
      this.comments,
      27,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/CKfkR1M.jpg',
      'r/steamhunt'),
    new Posts(
      'Fruit of the Loom, the best rap duo in the business ',
      21,
      'User8',
      3215,
      this.comments,
      18337,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/IqK6Q9L.jpg',
      'r/bikinibottomtwitter'),
    new Posts(
      'I Love these people',
      3,
      'User9',
      535,
      this.comments,
      5337,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/Ove3vSx.jpg',
      'r/battlecars'),
    new Posts(
      'Dont be fooled by the flavour',
      9,
      'User10',
      885,
      this.comments,
      2517,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/PRNbda9.jpg',
      'r/battlefield'),
    new Posts(
      'trapdoor spider',
      21,
      'User11',
      805,
      this.comments,
      801,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/eilNaAa.jpg',
      'r/gaming'),
    new Posts(
      'Hes literally the guy in both pics',
      3,
      'User12',
      534,
      this.comments,
      8111,
      'https://i.imgur.com/rsD0RUq.jpg',
      'https://i.imgur.com/F2ZtOrX.jpg',
      'r/pcmasterrace')
  ];
  getPosts() {
    return this.masterPostList;
  }
  getPostKarma(){
    return this.postKarma;
  }
  getCommentKarma(){
    return this.commentKarma;
  }
  getUserName(){
    return this.myUserName;
  }
  showHot() {
    let check = false;
    let count = 0;
    const hold = [];
    while (!check) {
      check = true;
      for (let i = 0; i < this.masterPostList.length - count; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.masterPostList[i].upvotes / this.masterPostList[i].commentNum) > (this.masterPostList[i + 1].upvotes / this.masterPostList[i + 1].commentNum)) {
          hold.push(this.masterPostList[i]);
          hold.push(this.masterPostList[i + 1]);
          this.masterPostList[i] = hold[1];
          this.masterPostList[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    return this.masterPostList;
  }


  showNew() {
    let check = false;
    let count = 0;
    const hold = [];
    while (!check) {
      check = true;
      for (let i = 0; i < this.masterPostList.length - count; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.masterPostList[i].time) > (this.masterPostList[i + 1].time)) {
          hold.push(this.masterPostList[i]);
          hold.push(this.masterPostList[i + 1]);
          this.masterPostList[i] = hold[1];
          this.masterPostList[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    return this.masterPostList;
  }

  showRising() {
    let check = false;
    let count = 0;
    const hold = [];
    while (!check) {
      check = true;
      for (let i = 0; i < this.masterPostList.length - count; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.masterPostList[i].upvotes / this.masterPostList[i].time) > (this.masterPostList[i + 1].upvotes / this.masterPostList[i + 1].time)) {
          hold.push(this.masterPostList[i]);
          hold.push(this.masterPostList[i + 1]);
          this.masterPostList[i] = hold[1];
          this.masterPostList[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    return this.masterPostList;
  }

  showControversial() {
    let check = false;
    let count = 0;
    const hold = [];
    while (!check) {
      check = true;
      for (let i = 0; i < this.masterPostList.length - count; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.masterPostList[i].upvotes / this.masterPostList[i].commentNum) < (this.masterPostList[i + 1].upvotes / this.masterPostList[i + 1].commentNum)) {
          hold.push(this.masterPostList[i]);
          hold.push(this.masterPostList[i + 1]);
          this.masterPostList[i] = hold[1];
          this.masterPostList[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    return this.masterPostList;
  }

  showTop() {
    let check = false;
    let count = 0;
    const hold = [];
    while (!check) {
      check = true;
      for (let i = 0; i < this.masterPostList.length - count; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.masterPostList[i].upvotes) < (this.masterPostList[i + 1].upvotes)) {
          hold.push(this.masterPostList[i]);
          hold.push(this.masterPostList[i + 1]);
          this.masterPostList[i] = hold[1];
          this.masterPostList[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    return this.masterPostList;
  }

}

