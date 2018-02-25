import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  @Input() formData;
  form: FormGroup;
  personProps = [];

  constructor() {
  }

  ngOnInit() {
    const formData = {};
    for (const prop of Object.keys(this.formData)) {
      formData[prop] = new FormControl(this.formData[prop].value);
      this.personProps.push({
        key: prop,
        label: this.formData[prop].label,
        type: this.formData[prop].type,
      });
    }
    this.form = new FormGroup(formData);
  }

}
