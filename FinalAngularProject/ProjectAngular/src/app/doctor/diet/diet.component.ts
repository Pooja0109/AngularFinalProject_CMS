import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent {
  id_no:any;
  patientLst:any;
  diet:string[]=[]
  dietLst:any;
  dietkey:any="";
  DCLst:any;
  
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

    this.PS.getDiet().subscribe({
      next:(data:any)=>{
        this.dietLst=data
      },
      error:()=>{
        alert("Something wrong")
        this.dietLst=[]
      }
    });


    this.PS.getDietCollect().subscribe({
      next:(data:any)=>{
        this.DCLst=data
      },
      error:()=>{
        alert("Something wrong in diet")
        this.DCLst=[]
      }
    });

  }


  diets= [
    "Ketogenic diet",
    "Diabetic diet",
    "DASH diet",
    "Healthy diet",
    "Anti-inflammatory diet",
    "Gluten-free diet"
  ];
}
