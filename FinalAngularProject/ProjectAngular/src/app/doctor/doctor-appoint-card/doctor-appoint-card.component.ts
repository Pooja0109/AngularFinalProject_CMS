import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-doctor-appoint-card',
  templateUrl: './doctor-appoint-card.component.html',
  styleUrls: ['./doctor-appoint-card.component.css']
})
export class DoctorAppointCardComponent {
  @Input() patient:any;
}
