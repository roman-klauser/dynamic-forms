import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  form: FormGroup;
  fieldName = 'age';
  fieldValue = '33';

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }

}
