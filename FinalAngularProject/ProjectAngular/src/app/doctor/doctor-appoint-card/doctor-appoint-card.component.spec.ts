import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointCardComponent } from './doctor-appoint-card.component';

describe('DoctorAppointCardComponent', () => {
  let component: DoctorAppointCardComponent;
  let fixture: ComponentFixture<DoctorAppointCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAppointCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
