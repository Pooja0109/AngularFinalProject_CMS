import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { PatientDialogComponent } from '../../patient-dialog/patient-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPatientComponent } from '../../add-edit-patient/add-edit-patient.component';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-patient-cards',
  templateUrl: './patient-cards.component.html',
  styleUrls: ['./patient-cards.component.css']
})
export class PatientCardsComponent {
  @Input() patient:any;
  constructor(private _dialog:MatDialog,private PS:PatientService)
  {}
}
