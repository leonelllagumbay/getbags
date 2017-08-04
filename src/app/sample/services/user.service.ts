import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  firstname: string;
  lastname: string;
  age: number;
  constructor() {
    this.firstname = "Leonell";
    this.lastname = "Lagumbay";
    this.age = 12;
  }
  setFirstname(s: string) {
    this.firstname = s;
  }

}
