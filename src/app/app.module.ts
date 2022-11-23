import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyListComponent } from './mylist/mylist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MapviewerComponent } from './mapviewer/mapviewer.component';
import { FirebasedataComponent } from './firebasedata/firebasedata.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { environment } from '../environments/environment';
import { CurrentlocationComponent } from './currentlocation/currentlocation.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    UserprofileComponent,
    MapviewerComponent,
    FirebasedataComponent,
    CurrentlocationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
