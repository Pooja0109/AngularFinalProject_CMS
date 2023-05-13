import { Component, Inject } from '@angular/core';
import { PatientCardsComponent } from '../patient-view/patient-cards/patient-cards.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appoint-history-dialog',
  templateUrl: './appoint-history-dialog.component.html',
  styleUrls: ['./appoint-history-dialog.component.css']
})
export class AppointHistoryDialogComponent {
  appointlist:any;

  constructor( @Inject(MAT_DIALOG_DATA) public data: {id:any,id_user:any,firstname:any},private PS :PatientService) {
    console.log("ID in dialog :",data.id)
    console.log("ID_USER in dialog :",data.id_user)

    this.PS.getAppoint().subscribe({
      next: (data:any)=> {this.appointlist =data},
      error: ()=>{alert("Some thing wrong in appoint history dialog") }
    })
  }
}
