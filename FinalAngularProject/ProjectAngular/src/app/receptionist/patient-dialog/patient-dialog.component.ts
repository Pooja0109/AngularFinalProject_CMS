import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.css']
})
export class PatientDialogComponent {
  id:any;
  details:any;
  constructor(private PS:PatientService,private ar:ActivatedRoute,private router: Router)
  {
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['pooja']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
    // console.log("ID.....",this.id)
 }
 readData(){
    this.PS.getPatDetails(this.id).subscribe
    ({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })
  }

  DeletePatient()
  {
    this.PS.deletePatient(this.id).subscribe({
      next:(res:any)=>{
        alert("Patient record deleted.");
        // this.router.navigateByUrl("http://localhost:4200/");
        // location.reload();
      },
      error:(error)=>
      {alert('Not Deleted ---some Error')
    }
    })
  //   setTimeout(() => {
  //     this.router.navigateByUrl("");
  // }, 1000);  //3s
  }


  
//   ngOnInit() {
//     setTimeout(() => {
//         this.router.navigateByUrl("");
//     },5000);  //3s
// }
}
