import { Component } from '@angular/core';
import { AddEditPatientComponent } from '../add-edit-patient/add-edit-patient.component';
import { MatDialog } from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {
  constructor(private _dialog:MatDialog,private PS:PatientService)
  {}
  open_AddPat_Dialog()
  {
    this._dialog.open(AddEditPatientComponent);
  }
  logout()
  {
    this.PS.logout();
    // window.location.reload();
  }
 
}
