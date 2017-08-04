import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, 
         FormControl
} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'reactive-model-form', 
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.scss']
})
export class ReactiveModelFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];
  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
    });
  }

}
