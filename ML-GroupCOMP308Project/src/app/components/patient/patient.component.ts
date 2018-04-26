import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  options: FormGroup;
  links: any[];
  patientId: string;

  constructor(fb: FormBuilder, private _authService: AuthService) {

    this.options = fb.group({
      'fixed': true,
      'top': 0,
      'bottom': 0,
    });

    this.links = [
      {
        link: 'home',
        name: 'Home'
      },
      {
        link: 'games',
        name: 'Games'
      },
      {
        link: 'history',
        params: this._authService.patientId(),
        name: 'History'
      }
    ];
  }

  ngOnInit() {
  }

}
