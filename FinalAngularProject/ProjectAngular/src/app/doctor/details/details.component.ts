import { Component ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id_no:any;
  patientLst:any;
  

  constructor(private PS:PatientService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params:any)=>{ 
         this.id_no =params['id']
        },
        error: () => this.id_no = 0
      }
    )

    this.PS.getPatientLst(this.id_no).subscribe({
      next: (data:any)=> {this.patientLst =data
      // console.log("this is it ",this.patientLst)
      },
      error: ()=> this.patientLst = {}
    });

  }

  
  
}
