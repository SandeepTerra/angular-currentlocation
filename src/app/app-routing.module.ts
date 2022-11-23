import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebasedataComponent } from './firebasedata/firebasedata.component';
import { MapviewerComponent } from './mapviewer/mapviewer.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CurrentlocationComponent } from './currentlocation/currentlocation.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'mapviewer',
    component: MapviewerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'firebasedata',
    component: FirebasedataComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'currentlocation/:id',
    component: CurrentlocationComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
