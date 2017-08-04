import { Component, OnInit } from '@angular/core';
import {User} from 'app/sample/model/user';
import {UserService} from 'app/sample/services/user.service';

@Component({
  selector: 'grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss']
})
export class GrandparentComponent implements OnInit {
  defaultColor: string;
  headlineMessage: string;
  user: User[];
  usr: string;
  constructor(public us: UserService) { 
    this.headlineMessage = "welcome!";
    this.defaultColor = "pink";
    this.usr = us.firstname;
    this.user = [
     new User("Leonell", "Lagumbay", 28),
     new User("Mark", "Solis", 25),
     new User("Richard", "Naparite", 28),
     new User("Ysa", "Maniago", 34) 
    ]; 
  }

  ngOnInit() {
    this.headlineMessage = "yes you are welcome!";
    this.usr = this.us.firstname;
  }
  
  changeGrandParentBackGround(str: string) {
    console.log("grand parent controller was called", str);
    this.headlineMessage = str;
  }

}
