import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-doctor-homepage',
  templateUrl: './doctor-homepage.component.html',
  styleUrls: ['./doctor-homepage.component.css']
})
export class DoctorHomepageComponent {
  patientLst:any;
  details:any;
  id_no:any;
  searchKey:any="";
  dateUp:any="";
  p:any;

  constructor(private PS:PatientService,private ar:ActivatedRoute){
    
    this.PS.getPatient().subscribe({
      next: (data:any)=> this.patientLst =data,
      error: ()=> this.patientLst = {}
    });

    this.ar.params.subscribe(
      {
        next: (params:any)=>{ 
         this.id_no =params['id']
        },
        error: () => this.id_no = 0
      }
    )
  }
  
}
