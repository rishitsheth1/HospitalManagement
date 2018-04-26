import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css']
})
export class DailyUpdatesComponent implements OnInit {

  options: FormGroup;
  patient_id: string;

  constructor(private route: ActivatedRoute, private _authService: AuthService, fb: FormBuilder, private patientService: PatientService) {

    this.options = fb.group({
      'bodyTemperature': new FormControl('', [Validators.min(10), Validators.required]),
      'heartRate': new FormControl('', [Validators.min(10), Validators.required]),
      'bloodPressure': new FormControl('', [Validators.min(10), Validators.required]),
      'respiratoryRate': new FormControl('', [Validators.min(10), Validators.required]),
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patient_id = params.id;
    });
  }

  updatePatient() {
    const jsonObj = {
      bodyTemperature: this.options.get('bodyTemperature').value,
      bloodPressure: this.options.get('bloodPressure').value,
      heartRate: this.options.get('heartRate').value,
      respiratoryRate: this.options.get('respiratoryRate').value
    };
    this.patientService.addDailyUpdate(this.patient_id, jsonObj).subscribe(r => {
      this.options.reset();
      Object.keys(this.options.controls).forEach(key => {
        this.options.controls[key].setErrors(null);
      });
    });

  }

}
