import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { EditComponent } from './edit-patient/edit/edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
//  {
//   path:'',
//   redirectTo:'register-user',
//   pathMatch:'full'
// }, 
// {
//   path:'register-user',
//   component:RegisterUserComponent
// },
// {
//   path:'home-page',
//   component:HomePageComponent
// },
{
  path:'patient-details',
  component:PatientDetailsComponent
},
{
  path:'',
  component:EditPatientComponent
},
{
  path:"patient/add/:id",
  component:EditComponent
},
{
  path:"patient/edit/:id",
  component:EditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
