import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDialogComponent } from './receptionist/patient-dialog/patient-dialog.component';
import { PatientViewComponent } from './receptionist/patient-view/patient-view.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
 { path:"doctor",loadChildren:()=>import('./doctor/doctor.module').then(m=>m.DoctorModule)},
 { path:"reseptionist",loadChildren:()=>import('./receptionist/receptionist.module').then(m=>m.ReceptionistModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
