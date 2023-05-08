import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomepageComponent } from './doctor-homepage/doctor-homepage.component';
import { DetailsComponent } from './details/details.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DietComponent } from './diet/diet.component';


const routes: Routes = [
  {path:"DHome",component:DoctorHomepageComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"prescription/:id",component:PrescriptionComponent},
  {path:"diet/:id",component:DietComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
