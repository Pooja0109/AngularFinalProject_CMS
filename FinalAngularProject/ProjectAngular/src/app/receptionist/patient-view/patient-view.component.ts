import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent {
  patientLst:any;
  details:any;
  id_no:any;
  searchKey:any="";
  isOn:boolean=true;
  dateUp:any="";
  p:any;
  
  constructor(private PS:PatientService,private ar:ActivatedRoute){
    // window.location.reload();
   
    this.PS.getPatient().subscribe({
      next: (data:any)=> this.patientLst =data,
      error: ()=> this.patientLst = {}
    });

    this.ar.params.subscribe(
      {
        next: (params:any)=>{ 
         this.id_no =params['pooja']
        },
        error: () => this.id_no = 0
      }
    )
  }
  

  DeletePatient(id_no:number)
  {
    this.PS.deletePatient(id_no).subscribe({
      next:(res)=>{
        alert("Patient record deleted.");
        location.reload();
      },
      error:(error)=>alert('Not Deleted ---some Error')
    })

    console.log("Tokennnnnnn:",sessionStorage.getItem("token"))
  }
}
