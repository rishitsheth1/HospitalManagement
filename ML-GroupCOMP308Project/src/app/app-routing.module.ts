import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from './components/patient/patient.component';
import {NurseComponent} from './components/nurse/nurse.component';
import {PatientDetailsComponent} from './components/patient-details/patient-details.component';
import {LoginComponent} from './components/login/login.component';
import {SymptomsComponent} from './components/symptoms/symptoms.component';
import {GamesComponent} from './components/games/games.component';
import {PatientHistoryComponent} from './components/patient-history/patient-history.component';
import {PatientHomeComponent} from './components/patient-home/patient-home.component';
import {NurseHomeComponent} from './components/nurse-home/nurse-home.component';
import {PatientListComponent} from './components/patient-list/patient-list.component';
import {LogoutComponent} from './components/logout/logout.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {AddMedicationComponent} from './components/add-medication/add-medication.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'nurse', component: NurseComponent,
    children: [
      {path: '', redirectTo: '/nurse/(n:home/)', pathMatch: 'full'},
      {path: 'home/', component: NurseHomeComponent, outlet: 'n'},
      {path: 'patient/', component: PatientListComponent, outlet: 'n'},
      {path: 'patient-history/:id', component: PatientHistoryComponent, outlet: 'n' },
      {path: 'add-medication/:id', component: AddMedicationComponent, outlet: 'n'},
      {path: 'patient/:id', component: PatientDetailsComponent, outlet: 'n'},
      {path: 'history/:id', component: PatientHistoryComponent, outlet: 'n'},
      {path: 'notifications/', component: NotificationsComponent, outlet: 'n'},
    ]
  },
  {
    path: 'patient', component: PatientComponent,
    children: [
      {path: '', redirectTo: '/patient/(p:home/)', pathMatch: 'full'},
      {path: 'home/', component: PatientHomeComponent, outlet: 'p'},
      {path: 'history/:id', component: PatientHistoryComponent, outlet: 'p'},
      {path: 'games/', component: GamesComponent, outlet: 'p'},
      {path: 'symptoms/', component: SymptomsComponent, outlet: 'p'}
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
