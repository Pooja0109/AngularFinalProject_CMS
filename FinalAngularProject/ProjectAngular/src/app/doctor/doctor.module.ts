import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorHomepageComponent } from './doctor-homepage/doctor-homepage.component';
import { DoctorTitleBarComponent } from './doctor-title-bar/doctor-title-bar.component';
import { MaterialModule } from '../material/material.module';
import { DoctorAppointCardComponent } from './doctor-appoint-card/doctor-appoint-card.component';
import { DetailsComponent } from './details/details.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DietComponent } from './diet/diet.component';
import { PatTitlebarComponent } from './pat-titlebar/pat-titlebar.component';
import { FormsModule } from '@angular/forms';
import { PresHistoryComponent } from './prescription/pres-history/pres-history.component';
import { DoctordatefilterPipe } from '../doctordatefilter.pipe';
import { DietChildComponent } from './diet/diet-child/diet-child.component';
import { DietpipePipe } from '../dietpipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DoctorHomepageComponent,
    DoctorTitleBarComponent,
    DoctorAppointCardComponent,
    DetailsComponent,
    PrescriptionComponent,
    DietComponent,
    PatTitlebarComponent,
    PresHistoryComponent,
    DoctordatefilterPipe,
    DietChildComponent,
    DietpipePipe
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    DoctorHomepageComponent,
    DoctorTitleBarComponent
  ]
})
export class DoctorModule { }
