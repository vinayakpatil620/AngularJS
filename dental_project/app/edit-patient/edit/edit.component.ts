import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number; 
  header:string;
  patient:Patient ={
    id:0,
    name:'',
    Phone:0,
    email:''
   };


  constructor(private router:Router, private route:ActivatedRoute, private patientService:PatientService) {}
   

  ngOnInit(): void {
    
    this.id= + this.route.snapshot.paramMap.get('id');
    this.header =this.id===0? 'Add patient':'edit patient';

    if(this.id !=0){
      this.patient= this.patientService.onGetPatient(this.id);
    }
  }
onSubmit(form: NgForm){
  let patient:Patient={
    id: form.value.id,
    name: form.value.name,
    email: form.value.email,
    Phone: form.value.Phone,
  }

this.patientService.onAdd(patient);
this.router.navigateByUrl('');
}
}
