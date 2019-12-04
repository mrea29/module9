import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.css']
})
export class NewPatientFormComponent implements OnInit {
@Input() firstName: string;
@Input() lastName: string;
public mode = 'add'; //default mode
private id: string; //patient id
  constructor(private _myService: PatientService, private router: Router, public route: ActivatedRoute) { }
onSubmit(){
  console.log("You submitted: " + this.firstName + " " + this.lastName);
  if(this.mode == 'Add')
  this._myService.addPatients(this.firstName, this.lastName);
  if(this.mode == 'Edit')
  this._myService.updatePatient(this.id, this.firstName, this.lastName);
  this.router.navigate(['/listPatients'])
}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'Edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');}
      else {this.mode = 'Add';
          this.id = null; }
    });
  }
}
