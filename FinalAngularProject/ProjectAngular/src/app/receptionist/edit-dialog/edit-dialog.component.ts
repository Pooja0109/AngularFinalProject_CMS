import { Component,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  minDate=new Date();
  maxDate=new Date(2024,11,30);
  editlist:any;
  patientForm: any;
  id:any;
  // @Input() ppp:any;



  //feilds
  firstname:any;
  lastname:any;
  email:any;
  gender:any;
  age:any;
  city:any;
  state:any;
  pincode:any;
  contact:any;
  emg_contact:any;
  height:any;
  weight:any;
  blood_group:any;
  appoint:any;
  id_user:any;
  currentDate :any=new Date();
  bld_group: string[] = [
    "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"
  ]
  issue_group:string[]=["Allergies","Headaches","Stomach Aches","Influenza (flu)","Conjunctivitis","Pneumonia","Common cold","Ear Pain","Others"]

 
  constructor(private _fb: FormBuilder, private PS: PatientService,private ar:ActivatedRoute) {
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['pooja']
        //  console.log("Here is Edit now",this.ppp)
        },
        error: () => this.id = 0
      }
      
    )


    this.PS.getPatDetails(this.id).subscribe({
          next: (data:any)=> {this.editlist =data
            this.firstname=this.editlist.firstname;
            this.lastname=this.editlist.lastname;
            this.email=this.editlist.email;
            this.gender=this.editlist.gender;
            this.city=this.editlist.city;
            this.state=this.editlist.state;
            this.pincode=this.editlist.pincode;
            this.height=this.editlist.height;
            this.age=this.editlist.age;
            this.weight=this.editlist.weight;
            this.contact=this.editlist.contact;
            this.emg_contact=this.editlist.emg_contact;
            this.blood_group=this.editlist.blood_group;
            this.appoint=this.editlist.appoint;
            this.id_user=this.editlist.id_user;
            this.issue_group=this.editlist.issue_group;
            console.log("They are here:",this.editlist.firstname)},
          error: ()=> this.editlist = {}
        })
  }
PutEdit()
{
  var temp:any={
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        age:this.age,
        gender:this.gender,
        city:this.city,
        state:this.state,
        pincode:this.pincode,
        contact:this.contact,
        emg_contact:this.emg_contact,
        height:this.height,
        weight:this.weight,
        blood_group:this.blood_group,
        appoint:this.appoint,
        issue_group:this.issue_group,
        id_user:this.id_user
      }

      var temp2:any={
        id_user:this.id_user,
        issue_group:this.issue_group,
        dates:this.appoint
      }

  this.PS.EditPatient(this.id,temp).subscribe({
          next: (data: any) => {
            alert("Patient Updated sucessfully")
            // location.reload();
          },
          error: (err) => {
            console.error(err);
            alert("Some Error Ocuured")
          }
        })

        this.PS.postAppoint(temp2).subscribe({
          next:(data:any)=>{},
          error:(err) => {
            alert(err);
          }
        })
}
}
