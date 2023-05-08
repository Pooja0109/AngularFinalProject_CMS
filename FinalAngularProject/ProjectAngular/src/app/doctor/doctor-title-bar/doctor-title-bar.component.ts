import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-title-bar',
  templateUrl: './doctor-title-bar.component.html',
  styleUrls: ['./doctor-title-bar.component.css']
})
export class DoctorTitleBarComponent {
  constructor(private PS:PatientService)
  {}
  logout()
  {
    this.PS.logout();
    // window.location.reload();
  }
}
