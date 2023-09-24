import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  User:any;// = JSON.parse(JSON.stringify(sessionStorage.getItem("User")));
  constructor() {
    
   }

  ngOnInit(): void {
    this.User = JSON.parse(JSON.stringify(sessionStorage.getItem("User")));
    console.log(this.User);
  }

}
