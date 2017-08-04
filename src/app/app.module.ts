import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, 
         FormControl
} from '@angular/forms';

import { AppComponent } from './app.component';
import { GrandparentComponent } from './sample/components/grandparent/grandparent.component';
import { ParentComponent } from './sample/components/parent/parent.component';
import { ChildComponent } from './sample/components/child/child.component';
import { GrandchildComponent } from './sample/components/grandchild/grandchild.component';
import {UserService} from 'app/sample/services/user.service';
import { ReactiveModelFormComponent } from './sample/components/reactive-model-form/reactive-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandparentComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    ReactiveModelFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
