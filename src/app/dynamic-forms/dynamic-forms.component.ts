import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  form: FormGroup;
  person = {
    firstName: 'Max',
    lastName: 'Mustermann',
    age: 32
  };
  personProps = [];

  constructor() {
  }

  ngOnInit() {
    const formData = {}
    for (const prop of Object.keys(this.person)) {
      formData[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formData);
  }

}
