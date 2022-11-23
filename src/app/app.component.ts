import { Component } from '@angular/core';

import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-openlayer';
  serverName = 'value';
  myary: string[] = [];
  loginusername: any = "";
  
  constructor(private router: Router) {  
    
  }

  ngOnInit() {
   
    this.loginusername =  localStorage.getItem('token');
    
  }

  readLocalStorageValue() {
    this.loginusername = localStorage.getItem('token');
    if (localStorage.getItem('token') != null){
      return true;
    }
    else {
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  ngOnChanges() {

  }

  onClickAdd() {
    if(this.serverName.trim() !== '') {
      this.myary.push(this.serverName);
      this.serverName = '';
      this.router.navigate(['/userprofile']);
    }
  }

  onClickRemove(index: number) {
    //const index = this.myary.indexOf(item, 0);
    if (index > -1) {
      this.myary.splice(index, 1);
    }
  }

}
