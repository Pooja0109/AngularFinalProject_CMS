import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { PatientDialogComponent } from '../../patient-dialog/patient-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPatientComponent } from '../../add-edit-patient/add-edit-patient.component';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';
import { AppointHistoryDialogComponent } from '../../appoint-history-dialog/appoint-history-dialog.component';

@Component({
  selector: 'app-patient-cards',
  templateUrl: './patient-cards.component.html',
  styleUrls: ['./patient-cards.component.css']
})
export class PatientCardsComponent {
  @Input() patient: any;
  patientLst:any;
  details:any;
  id_no:any;
  constructor(private _dialog1: MatDialog, private PS: PatientService,private ar:ActivatedRoute) 
  {
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

  openDialogHistory() {
    this._dialog1.open(AppointHistoryDialogComponent, {
      data: {
        id: this.patient.id,
        id_user:this.patient.id_user,
        firstname:this.patient.firstname
      },
    });
  }


  
}
