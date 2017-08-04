import { Component, OnInit } from '@angular/core';
import {FormsModule, FormControl, FormGroup, FormGroupName, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  myform: FormGroup;
  constructor() { 
    
   
  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }

  langs: string[] = [
    'English',
    'French',
    'German'
  ]
}
