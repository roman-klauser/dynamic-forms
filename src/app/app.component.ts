import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    gender: {
      value: 'M',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M'},
        { label: 'Female', value: 'F'},
      ]
    },
    firstName: {
      value: 'Max',
      label: 'First name',
      type: 'text',
      validators: {
        required: true
      }
    },
    lastName: {
      value: 'Mustermann',
      label: 'Last name',
      type: 'text',
      validators: {
        required: true
      }
    },
    age: {
      value: 32,
      label: 'Age',
      type: 'number',
      validators: {
        min: 18
      }
    },
    city: {
      value: 'MS',
      label: 'city',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: 'Münster', value: 'MS'},
        { label: 'Berlin', value: 'B'},
        { label: 'Düsseldorf', value: 'D'},
      ]
    }
  };
}
