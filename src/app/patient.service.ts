import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response 
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PatientService {
    constructor(private http:HttpClient) {}

    //Users http.get() to load data
    getPatients() {
        return this.http.get('http://localhost:8000/patients');
    }
    addPatients(firstName: string, lastName: string) {
        this.http.post('http://localhost:8000/patients', { firstName, lastName }).subscribe((responseData) => {
            console.log(responseData);
        });
        location.reload();
    }
    deletePatient(patientId: string) {
        this.http.delete("http://localhost:8000/patients/" + patientId).subscribe(() => {
            console.log('Deleted: ' + patientId);
        });
     location.reload();
    }
    updatePatient(patientId: string,firstName: string, lastName: string) {
        //request path http://localhost:8000/students/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/patients/" + patientId,{ firstName, lastName }).subscribe(() => {
                console.log('Updated: ' + patientId);
              });
            location.reload();
        }
    
}

