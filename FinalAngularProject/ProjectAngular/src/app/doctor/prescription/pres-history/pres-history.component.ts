import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pres-history',
  templateUrl: './pres-history.component.html',
  styleUrls: ['./pres-history.component.css']
})
export class PresHistoryComponent {
@Input() prepid:any;
prepLst:any;

constructor(private PS:PatientService,private ar:ActivatedRoute){
  this.PS.getPrescrip().subscribe({
    next: (data:any)=> {this.prepLst =data },
    error: ()=> this.prepLst = {}
  });
}
}
