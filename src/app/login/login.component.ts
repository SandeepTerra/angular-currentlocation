import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errmsg: string = "";
  constructor(private service: UserService, private router: Router) {

  }

  ngOnInit(): void {
       this.errmsg = "";
  }

  onSubmit() {

    if (this.service.login(this.username, this.password)) {
      localStorage.setItem('token', this.username);
      this.router.navigate(['/currentlocation', this.username]);
    }
    else {
       this.errmsg ="invalid username or password";
    }
  }

}
