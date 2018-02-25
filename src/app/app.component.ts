import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    firstName: {
      value: 'Max',
      label: 'First name',
      type: 'text'
    },
    lastName: {
      value: 'Mustermann',
      label: 'Last name',
      type: 'text'
    },
    age: {
      value: 32,
      label: 'Age',
      type: 'number'
    }
  };
}
