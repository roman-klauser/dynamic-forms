import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      formData[prop] = new FormControl(
        this.formData[prop].value,
        this.mapValidator(this.formData[prop].validators));
      this.personProps.push({
        key: prop,
        label: this.formData[prop].label,
        type: this.formData[prop].type,
        options: this.formData[prop].options,
      });
    }
    this.form = new FormGroup(formData);
  }

  mapValidator(validators) {
    if (!validators) {
      return [];
    }
    return Object.keys(validators).map(validationType => {
      if (validationType === 'required') {
        return Validators.required;
      } else if (validationType === 'min') {
        return Validators.min(validators[validationType]);
      }
    });
  }

}
