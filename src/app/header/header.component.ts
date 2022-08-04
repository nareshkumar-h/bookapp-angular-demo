import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  projectName!:string;

  @Input()
  isLoggedIn!:boolean;

  // @Output()
  // childToParent!:string;

  logout(){
    alert("Successfully Logged Out");
    localStorage.clear();
    window.location.href="/auth/login";
  }
}
