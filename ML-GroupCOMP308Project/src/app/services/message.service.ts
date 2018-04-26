import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TestModel} from '../dummy/test.models';
import 'rxjs/add/observable/of';
import {AuthService} from './auth.service';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class MessageService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  updateMotivationalMessage(message: any) {
    const body = JSON.stringify(message);
    return this.http.post('http://localhost:3000/quotes/add?token=' + this.auth.token(), body, {headers: headers})
      .map((response) => response as any);
  }

  deleteMotivationalMessage(messageId: string) {
    return this.http.get('http://localhost:3000/quotes/remove/' + messageId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }

  getMotivationalMessageForPatient(patientId: string) {
    return this.http.get('http://localhost:3000/quotes/patient/' + patientId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }

  getMotivationalMessage(nurseId: string) {
    return this.http.get('http://localhost:3000/quotes/' + nurseId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }


  getAlerts(nurseId: string) {
    return this.http.get('http://localhost:3000/alert/' + nurseId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any[]);
  }

  sendAlert(message: any) {
    const body = JSON.stringify(message);
    return this.http.post('http://localhost:3000/alert/add?token=' + this.auth.token(), body, {headers: headers})
      .map((response) => response as any);
  }

}
