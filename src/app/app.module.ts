import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShowBestComponent } from './showBest/showBest.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ShowHotComponent } from './show-hot/show-hot.component';
import { ShowNewComponent } from './show-new/show-new.component';
import { ShowRisingComponent } from './show-rising/show-rising.component';
import { ShowControversialComponent } from './show-controversial/show-controversial.component';
import { ShowTopComponent } from './show-top/show-top.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    ShowBestComponent,
    WelcomeComponent,
    ShowHotComponent,
    ShowNewComponent,
    ShowRisingComponent,
    ShowControversialComponent,
    ShowTopComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
