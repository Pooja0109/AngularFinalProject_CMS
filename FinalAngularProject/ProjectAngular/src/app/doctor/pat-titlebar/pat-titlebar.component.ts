import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pat-titlebar',
  templateUrl: './pat-titlebar.component.html',
  styleUrls: ['./pat-titlebar.component.css']
})
export class PatTitlebarComponent {
  // @Input() patient:any; 

  patientLst:any;
  id_no:any;

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
