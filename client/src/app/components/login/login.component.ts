import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  login() {
    (document.getElementById('login-form') as HTMLFormElement).style.display = 'none';
    document.getElementById('login-spinner').style.display = 'block';
    document.getElementById('spinner-login-div').style.padding = '60px 60px 60px 60px';
  }

}
