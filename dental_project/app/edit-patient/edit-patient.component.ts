import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patients : Patient[];

  constructor(private patientService:PatientService ) { }

  ngOnInit(): void { 
    this.patients=this.patientService.onGet();
  }
onDelete(id:number){
  this.patientService.onDelete(id);

}
// onGetPatient(id:number){
//   this.patientService.onGetPatient(id);

// }
}
