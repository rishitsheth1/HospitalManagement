import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TestModel} from '../dummy/test.models';
import {AuthService} from './auth.service';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class NotificationsService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getAlerts(nurseId: string) {
    return this.http.get('http://localhost:3000/alert/' + nurseId + '?token=' + this.auth.token(), {headers: headers})
      .map((response) => response as any);
  }
}
