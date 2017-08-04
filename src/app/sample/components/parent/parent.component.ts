import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from 'app/sample/model/user';
import {UserService} from 'app/sample/services/user.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  defaultColor: string;
  parent: string;
  parentclass: string;
  parentstyle: {};
  user: Array<User>;
  usr: string;
  @Input("parentinputcolor") inputcolor: string;
  @Output() clickParent = new EventEmitter<string>();
  constructor(public us: UserService) {
    this.parent = "Im a parent";
    this.parentclass = "ClassA";
    this.inputcolor = "yellow";
    this.parentstyle = {
      backgroundColor: this.inputcolor
    }
    this.defaultColor = "yellow";
    this.usr = us.firstname;
    
    
  }
  
  change2red(e) {
    this.clickParent.emit(this.inputcolor);
    
    // change this parent background color after emitting the event outside
    this.parentstyle = {
      backgroundColor: "red"
    }
    this.us.setFirstname("New Name");
    this.usr = this.us.firstname;
  }

  ngOnInit() {
    console.log("input color", this.inputcolor);
    this.parentstyle = {
      backgroundColor: this.inputcolor
    }
    this.user = [
     new User("Gina", "Lagumbay", 28),
     new User("Tito", "Solis", 25)
    ]; 
  }

}
