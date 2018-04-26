import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  options: FormGroup;
  serverErrorMessage: string;
  router: Router;

  constructor(fb: FormBuilder, router: Router, private _authService: AuthService) {
    this.options = fb.group({
      'uname': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.minLength(4), Validators.required])
    });
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    const user = {
      'username': this.options.get('uname').value,
      'password': this.options.get('password').value
    };

    this._authService.login(user)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('fullname', response.fullname);
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('isNurse', response.user.isNurse);
          localStorage.setItem('username', response.user.username);
          localStorage.setItem('nurseId', response.nurseId);

          if (response.patientId) {
            localStorage.setItem('patientId', response.patientId);
          }

          console.log(response);
          console.log(localStorage.getItem('patientId'));
          // console.log(this._authService.userName());
          // console.log(this._authService.userId());

          if (response.user.isNurse) {
            this.router.navigate(['/nurse']);
          } else {
            this.router.navigate(['/patient']);
          }
        },
        error => console.error(error));
    this.options.reset();
  }
}
