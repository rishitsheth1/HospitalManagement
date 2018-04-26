import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import {TestModel} from '../../dummy/test.models';
import {MessageService} from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  motivationalMessage: any;
  patient: string;
  options: FormGroup;

  constructor(fb: FormBuilder, public snackBar: MatSnackBar,
              private _authService: AuthService, private messageService: MessageService) {
    this.options = fb.group({
      'alert': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.patient = this._authService.fullName();

    this.messageService.getMotivationalMessageForPatient(this._authService.patientId())
      .subscribe(d => this.motivationalMessage = d);
    //   {
    //   quote: 'Time is limited! Don\'t waste it in someone else\'s life',
    //   author: 'Steve Jobs',
    //   dateAdded: new Date('1/1/2017')
    // };
  }

  sendAlert() {
    this.messageService.sendAlert({
      patientId: this._authService.patientId(),
      message: this.options.get('alert').value
    }).subscribe(r => {
      this.options.reset();
      Object.keys(this.options.controls).forEach(key => {
        this.options.controls[key].setErrors(null);
      });
      this.snackBar.open('Alert Sent!', 'Dismiss', {duration: 3000});
    });

  }
}
