import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   private _userName: string = "";
    get userName(): string {
        return this._userName;
    }
    set userName(value: string) {
        this._userName = value;
    }
  constructor() { }

  login(username: string, password: string) {

    //this.userName
    let rval = false;
    if(username == "sandeep" && password == "kumar")
    {
      this._userName = username;
      rval =true;
    }
    return rval;
    //return this.http.post(this.BaseURI + '/ApplicationUser/Login');
  }

}
