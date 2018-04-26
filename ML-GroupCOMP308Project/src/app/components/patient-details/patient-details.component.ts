import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  options: FormGroup;
  patient_id: string;
  bodyTemperature: number;
  heartRate: number;
  bloodPressure: number;
  respiratoryRate: number;
  patientName: string;

  constructor(private route: ActivatedRoute, private router: Router, fb: FormBuilder,
              private _authService: AuthService,
              private patientService: PatientService) {
    this.route.params.subscribe(params => {
      this.patient_id = params.id;
      });
    this.patientService.getPatient(this.patient_id).subscribe(r => {
      this.patientName = r.name;
    });
   }


  ngOnInit() {
  }

}
