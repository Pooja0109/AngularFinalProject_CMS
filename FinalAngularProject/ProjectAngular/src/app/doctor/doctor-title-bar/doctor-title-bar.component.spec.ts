import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTitleBarComponent } from './doctor-title-bar.component';

describe('DoctorTitleBarComponent', () => {
  let component: DoctorTitleBarComponent;
  let fixture: ComponentFixture<DoctorTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTitleBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
