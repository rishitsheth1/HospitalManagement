import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent implements OnInit {

  options: FormGroup;
  patient_id: string;
  // bodyTemperature: number;
  // heartRate: number;
  // bloodPressure: number;
  // respiratoryRate: number;
  // medication: string;
  patientName: string;

  constructor(private route: ActivatedRoute, private router: Router, fb: FormBuilder, private _authService: AuthService,
              private patientService: PatientService) {
    this.route.params.subscribe(params => {
      this.patient_id = params.id;
    });

    this.patientService.getPatient(this.patient_id).subscribe(r => {
      this.patientName = r.name;
    });

    this.options = fb.group({
      'medication': new FormControl('', [Validators.minLength(3), Validators.required]),
      'bodyTemperature': new FormControl('', [Validators.min(10), Validators.required]),
      'heartRate': new FormControl('', [Validators.min(10), Validators.required]),
      'bloodPressure': new FormControl('', [Validators.min(10), Validators.required]),
      'respiratoryRate': new FormControl('', [Validators.min(10), Validators.required]),
    });
  }

  addMedication() {
    this.patientService.addToMedication(this.patient_id, {
      'patientId': this.patient_id,
      'nurseId': this._authService.nurseId(),
      'name': this.options.get('medication').value,
      'checkups': [
        {
          'bodyTemperature': this.options.get('bodyTemperature').value,
          'heartRate': this.options.get('heartRate').value,
          'bloodPressure': this.options.get('bloodPressure').value,
          'respiratoryRate': this.options.get('respiratoryRate').value
        }]
    }).subscribe(r => {
      this.options.reset();
      Object.keys(this.options.controls).forEach(key => {
        this.options.controls[key].setErrors(null);
      });
      this.router.navigate(['nurse']);
    });

  }

  ngOnInit() {
  }

}
