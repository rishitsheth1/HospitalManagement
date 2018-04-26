import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  options: FormGroup;
  diagnoseResults: string;
  totalChecboxClicked: number;

  symptoms: any[];

  selectedValues: any;

  constructor(fb: FormBuilder, private _authService: AuthService) {
    this.totalChecboxClicked = 0;
    this.symptoms = ['Fever', 'Body Ache', 'Fever1',
      'Body Ache1', 'Fever2', 'Body Ache2', 'Fever3',
      'Body Ache3', 'Fever4', 'Body Ache5', 'Fever5',
      'Body Ache5', 'Fever6', 'Body Ache6'];
    this.options = fb.group({
      'days': new FormControl('', [Validators.min(0),
        Validators.max(24), Validators.required]),
      'age': new FormControl('', [
        Validators.min(1),
        Validators.max(100),
        Validators.required,
        Validators.pattern('^[0-9]+$')]),
      'symptoms': new FormControl()
    });

  }

  ngOnInit() {
    this.selectedValues = {
      'days': 0,
      'age': 0,
      'symptoms': []
    };
  }

  checkSymptoms() {
    this.selectedValues.days = this.options.get('days').value;
    this.selectedValues.age = this.options.get('age').value;
    this.diagnoseResults = 'Normal Fever';
    console.log(this.selectedValues);
  }

  checkboxClicked(event) {
    if (event.source._checked) {
      this.totalChecboxClicked++;
      this.selectedValues.symptoms.push(event.source.value);
    } else {
      this.selectedValues.symptoms.pop(event.source.value);
      this.totalChecboxClicked--;
    }

  }
}
