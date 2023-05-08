import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
// import { CustomeDatePipePipe } from 'src/app/custome-date-pipe.pipe';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  id_no:any;
  patientLst:any;
  preList:any;
  Pdate:any;
  prescribe:any;
  errors: string[] = [];
  _dates:any;
  currentDate :any=new Date();
  
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

    // this.PS.getPrescripLst(this.id_no).subscribe({
    //   next: (data:any)=> {this.preList =data
    //   // console.log("this is it ",this.patientLst)
    //   },
    //   error: ()=> this.preList = {}
    // });

  }





  //Form Validations

  submit() {
    this.errors = []
  
    console.log("Pdate: ",this.Pdate)
    if (this.Pdate == undefined || this.Pdate.length < 3)
      this.errors.push("Date must be selected")

    if (this.prescribe == undefined)
      this.errors.push("Prescription should be filled")


    if (this.errors.length == 0) {
      let obj = {
        id_no:this.id_no,
        pre_date: this.Pdate,
        prescribe: this.prescribe,
      }

      this.PS.postPrescription(obj).subscribe({
        next: () => {
          alert("Prescription Posted...")
          this.Pdate = "",
            this.prescribe = ""
            location.reload();
          },
        error: () => alert("there is a problem posting this prescription")
      }
      )
    }
  }
}
