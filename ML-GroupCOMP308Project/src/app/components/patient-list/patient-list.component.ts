import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';
import {NurseService} from '../../services/nurse.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, AfterViewInit {

  nurse = this._authService.fullName();
  selection: SelectionModel<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) pagination: MatPaginator;
  patients = [];
  
  constructor(private _authService: AuthService, private nurseService: NurseService, private patientService: PatientService) {
    this.getPatients();
    this.displayedColumns = ['name', 'email', 'address', 'phone', 'isOnMedication', 'delete', 'history'];
    this.selection = new SelectionModel<any>(true, []);
  }

  ngOnInit(): void {

  }

  getPatients() {
    this.nurseService.getPatients(this._authService.nurseId())
      .subscribe(patients => {
        this.patients = patients;
        this.dataSource = new MatTableDataSource<any>(this.patients);
        this.dataSource.paginator = this.pagination;
      });
  }

  delete(id: string) {
    this.patientService.removePatient(id).subscribe(r => {
      this.getPatients();
    });
  }

  ngAfterViewInit(): void {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addMedication(id: any) {
  }
}
