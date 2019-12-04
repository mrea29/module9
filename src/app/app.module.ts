import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientService } from './patient.service';
import { HttpClientModule } from '@angular/common/http';
import { NewPatientFormComponent } from './new-patient-form/new-patient-form.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
//import { MatDatePickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule, MatIconModule } from '@angular/material'
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListPatientsComponent
 },       {
   path: 'addPerscription',         //when students added 
   component: NewPatientFormComponent
 },       {
   path: 'editPatient/:_id',    //when patients edited
   component: NewPatientFormComponent
 },       {
   path: 'listPatients',       //when students listed
   component: ListPatientsComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NewPatientFormComponent,
    NavigationMenuComponent,
    ListPatientsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    //MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
