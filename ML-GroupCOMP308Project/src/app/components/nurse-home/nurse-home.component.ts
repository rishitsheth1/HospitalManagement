import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../services/auth.service';
import {PatientService} from '../../services/patient.service';
import {NurseService} from '../../services/nurse.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers} from '@angular/http';
import {MessageService} from '../../services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nurse-home',
  templateUrl: './nurse-home.component.html',
  styleUrls: ['./nurse-home.component.css']
})
export class NurseHomeComponent implements OnInit, AfterViewInit {

  patients = [];
  selection: SelectionModel<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) pagination: MatPaginator;
  quote: any;
  options: FormGroup;

  constructor(fb: FormBuilder, private _authService: AuthService, private nurseService: NurseService,
              private patientService: PatientService, private msgService: MessageService) {
    this.options = fb.group({
      'author': new FormControl('', [Validators.minLength(3)]),
      'phrase': new FormControl('', [Validators.minLength(10), Validators.required])
    });
  }

  ngOnInit(): void {

    this.getPatients();
    this.getMotivationalQuote();
    this.displayedColumns = ['select', 'patientId.name', 'name', 'createdAt', 'end_date', 'edit'];
    this.selection = new SelectionModel<any>(true, []);
  }

  getPatients() {
    this.nurseService.getPatientsOnMedication(this._authService.nurseId())
      .subscribe(patient => {
        this.patients = patient;
        this.dataSource = new MatTableDataSource<any>(this.patients);
        this.dataSource.paginator = this.pagination;
      });
  }

  getMotivationalQuote() {
    this.msgService.getMotivationalMessage(this._authService.nurseId()).subscribe(r => {
      this.quote = r;
      if (r) {
        this.options.get('phrase').setValue(r.phrase);
        this.options.get('author').setValue(r.author);
      }
    });
  }

  ngAfterViewInit(): void {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  completeMedication(row, event) {
    this.patientService.completeMedication(row.patientId._id, {
      'isOnMedication': !event.checked,
      'medicationId': row._id
    }).subscribe(r => {
      this.getPatients();
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected(): boolean {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  deleteMotivationalQuote(_id: any) {
    this.msgService.deleteMotivationalMessage(_id)
      .subscribe(r => {
        this.options.reset();
        Object.keys(this.options.controls).forEach(key => {
          this.options.controls[key].setErrors(null);
        });
      });
  }

  updateTodaysQuote() {
    this.msgService.updateMotivationalMessage({
      nurseId: this._authService.nurseId(),
      phrase: this.options.get('phrase').value,
      author: this.options.get('author').value,
    })
      .subscribe(r => {
        this.getMotivationalQuote();
      });
  }
}
