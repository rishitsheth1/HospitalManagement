import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit, AfterViewInit {

  medications: any[];
  patient_id: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private _authService: AuthService, private patientService: PatientService) {
    this.route.params.subscribe(params => {
      this.patient_id = params.id;
    });
  }

  ngOnInit() {

    this.patientService.getPatientHistory(this.patient_id)
      .subscribe(medications => this.medications = medications);
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.pagination;
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.medications.checkups.filter = filterValue;
  // }
}
