import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  projectName = "BookApp ";
  isLoggedIn = false;
  
  constructor(){

  }
  ngOnInit(): void {
    let isLoggedInStr = localStorage.getItem("IS_LOGGED_IN");
    this.isLoggedIn = isLoggedInStr != null? Boolean(isLoggedInStr):false;

  }
}
