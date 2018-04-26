import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {User} from '../models/user.model';
import {TestModel} from '../dummy/test.models';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from './auth.service';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class PatientService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  removePatient(patientId: string) {
    return this.http.get('http://localhost:3000/patient/remove/' + patientId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }

  updatePatient(patientId: string, patient: any) {
    const body = JSON.stringify(patient);
    return this.http.post('http://localhost:3000/patient/update/' + patientId + '?token=' + this.auth.token(), body, {headers: headers})
      .map((response) => response as any);
  }

  // Handle Patient medication
  addToMedication(patientId: string, patientMedication: any) {
    const body = JSON.stringify(patientMedication);
    return this.http.post('http://localhost:3000/patient/add-to-medication/' + patientId + '?token=' + this.auth.token(),
      body, {headers: headers})
      .map((response) => response as any);
  }

  completeMedication(patientId: string, medicationBody: any) {
    const body = JSON.stringify(medicationBody);
    return this.http.post('http://localhost:3000/patient/complete-medication/' + patientId + '?token=' + this.auth.token(), body,
      {headers: headers})
      .map((response) => response as any);
  }

  addDailyUpdate(patientId: string, patientJson: any) {
    const body = JSON.stringify(patientJson);
    return this.http.post('http://localhost:3000/patient/add-daily-update/' + patientId + '?token=' + this.auth.token(), body,
      {headers: headers})
      .map((response) => response as any);
  }

  // Patient History
  getPatientHistory(patientId: string) {
    return this.http.get('http://localhost:3000/patient/history/' + patientId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any[]);
  }

  getPatient(patientId: string) {
    return this.http.get('http://localhost:3000/patient/' + patientId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }

}
