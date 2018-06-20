import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register() {
    (document.getElementById('register-form') as HTMLFormElement).style.display = 'none';
    document.getElementById('login-spinner').style.display = 'block';
    document.getElementById('spinner-login-div').style.padding = '100px 100px 100px 100px';
  }

}
