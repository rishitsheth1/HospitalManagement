import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import {HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private location: Location) {
  }

  register(user: any) {
    const body = JSON.stringify(user);
    return this.http.post('http://localhost:3000/auth/register', body, {headers: headers})
      .map((response) => response as any);
  }

  login(user): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post('http://localhost:3000/auth/login', body, {headers: headers})
      .map((response: Response) => {
        return response as any;
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  userName() {
    return localStorage.getItem('username');
  }

  fullName() {
    return localStorage.getItem('fullname');
  }

  token() {
    return localStorage.getItem('token');
  }

  isNurse() {
    return JSON.parse(localStorage.getItem('isNurse')) === true;
  }

  nurseId() {
    return localStorage.getItem('nurseId');
  }

  patientId() {
    return localStorage.getItem('patientId');
  }

  username() {
    return localStorage.getItem('username');
  }
}
