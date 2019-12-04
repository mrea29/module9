import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  public patients;
  //initialized the call using patientService
  constructor(private _myService: PatientService) { }
  ngOnInit() {
    this.getPatients();
  }
  //method called OnInit
  getPatients() {
    this._myService.getPatients().subscribe(
      //read data and assign to public variable patients
      data => { this.patients = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(patientId: string) {
    this._myService.deletePatient(patientId);
  }
}
