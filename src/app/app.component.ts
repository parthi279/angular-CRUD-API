import { Component, NgModule, VERSION } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  registrationForm = new FormGroup({
    userName: new FormControl("",)
  });

  onSubmit() {}
}
