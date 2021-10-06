import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: Patient[] =[
    {
      id:1,
      name:"vijay",
      email:"vijay@gmail.com",
      Phone: 111
    },
    {
      id:2,
      name:"vikas",
      email:"vikas@gmail.com",
      Phone: 222
    }
  ];

  constructor() { }
  onGet(){
    return this.patients;
  }
  onGetPatient(id:Number){
    return this.patients.find(x=>x.id===id);

  }
  onAdd(patient:Patient){
    this.patients.push(patient);
  }
  onDelete(id:number){
   let patient = this.patients.find(x=>x.id===id);
   let index = this.patients.indexOf(patient,0);
   this.patients.splice(index,1);
  }
}
