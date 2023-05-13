import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent {

  minDate=new Date();
  maxDate=new Date(2024,11,30);
  patientForm: any;
  userID:any;
  bld_group: string[] = [
    "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"
  ]
  issue_group:string[]=["Allergies","Headaches","Stomach Aches","Influenza (flu)","Conjunctivitis","Pneumonia","Common cold","Ear Pain","Others"]
  currentDate :any=new Date();
  
  constructor(private _fb: FormBuilder, private PS: PatientService, private _dialogRef: MatDialogRef <AddEditPatientComponent>) {
    this.patientForm = this._fb.group(
      {
        firstname:['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(
          "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
        gender: ['', [Validators.required]],
        age: ['', [Validators.required,Validators.pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$")]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pincode: ['', [Validators.required]], //,Validators.pattern("^[0-9]{6}$")
        contact: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
        emg_contact: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
        height: ['', [Validators.required]],   //,Validators.pattern("^([0-9]+|[1-9])|\.[0-9]?$")]
        weight: ['', [Validators.required]],  //,Validators.pattern("^([0-9]+|[1-9])|\.[0-9]?$")]
        blood_group: ['', [Validators.required]],
        issue_group: ['', [Validators.required]],
        appoint: ['', [Validators.required]]
      }
    )
      this.userID=Math.round(Math.random() * 100000);
      console.log("User id in ADD 1: ",this.userID);
  }


  OnFormRegister() {
    console.log("User id in ADD 2:",this.userID);
    var temp:any={
      firstname: this.patientForm.value.firstname,
      lastname: this.patientForm.value.lastname,
      email: this.patientForm.value.email,
      age:this.patientForm.value.age,
      gender:this.patientForm.value.gender,
      city:this.patientForm.value.city,
      state:this.patientForm.value.state,
      pincode:this.patientForm.value.pincode,
      contact:this.patientForm.value.contact,
      emg_contact:this.patientForm.value.emg_contact,
      height:this.patientForm.value.height,
      weight:this.patientForm.value.weight,
      blood_group:this.patientForm.value.blood_group,
      issue_group:this.patientForm.value.issue_group,
      appoint:this.patientForm.value.appoint,
      id_user:this.userID,
      
    }
    console.log("User id in ADD 3:",this.userID);
    var temp2:any={
      id_user:this.userID,
      dates:this.patientForm.value.appoint
    }

    if (this.patientForm.valid) {
      this.PS.addPatient(temp).subscribe({
        next: (data: any) => {
          alert("Patient added sucessfully")
          this._dialogRef.close(true);
          location.reload();
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    this.PS.postAppoint(temp2).subscribe({
      next:(data:any)=>{},
      error:(err) => {
        alert(err);
      }
    })
  }

}
