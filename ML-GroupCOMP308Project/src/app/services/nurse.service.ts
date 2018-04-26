import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {AuthService} from './auth.service';

const headers = new HttpHeaders({'Content-Type': 'application/json', 'responseType': 'application/json'});

@Injectable()
export class NurseService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getPatients(nurseId: string) {
    return this.http.get('http://localhost:3000/nurse/' + nurseId + '/patients?token=' + this.auth.token(),
      {headers: headers})
      .map((response) => {
        return response as any[];
      });
  }

  getPatientsOnMedication(nurseId: string) {
    return this.http.get('http://localhost:3000/nurse/' + nurseId + '/patients-on-medication?token=' + this.auth.token(),
      {headers: headers})
      .map((response) => {
        return response as any[];
      });
  }
}
