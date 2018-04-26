import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {PatientComponent} from './components/patient/patient.component';
import {PatientDetailsComponent} from './components/patient-details/patient-details.component';
import {GamesComponent} from './components/games/games.component';
import {SymptomsComponent} from './components/symptoms/symptoms.component';
import {NurseComponent} from './components/nurse/nurse.component';
import {PatientHistoryComponent} from './components/patient-history/patient-history.component';
import {DailyUpdatesComponent} from './components/daily-updates/daily-updates.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {NotificationsService} from './services/notifications.service';
import {NurseService} from './services/nurse.service';
import {PatientService} from './services/patient.service';
import {SymptomsService} from './services/symptoms.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PatientHomeComponent} from './components/patient-home/patient-home.component';
import {NurseHomeComponent} from './components/nurse-home/nurse-home.component';
import {MaterialModule} from './modules/material-module/material-module.module';
import {PatientListComponent} from './components/patient-list/patient-list.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AddMedicationComponent} from './components/add-medication/add-medication.component';
import {MessageService} from './services/message.service';
import {TestModel} from './dummy/test.models';
import {PatientAddComponent} from './components/patient-add/patient-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PatientComponent,
    PatientDetailsComponent,
    GamesComponent,
    SymptomsComponent,
    NurseComponent,
    PatientHistoryComponent,
    DailyUpdatesComponent,
    NotificationsComponent,
    PatientHomeComponent,
    NurseHomeComponent,
    PatientListComponent,
    LogoutComponent,
    AddMedicationComponent,
    PatientAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    PatientService,
    NurseService,
    NotificationsService,
    MessageService,
    SymptomsService,
    TestModel],
  bootstrap: [AppComponent]
})
export class AppModule {
}
