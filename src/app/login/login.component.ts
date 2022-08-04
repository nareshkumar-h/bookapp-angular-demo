import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Successfully Loggedin");
    localStorage.setItem("IS_LOGGED_IN", "true");
    localStorage.setItem("ROLE","USER");
    
    window.location.href="/books";
  }


}
