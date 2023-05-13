import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointHistoryDialogComponent } from './appoint-history-dialog.component';

describe('AppointHistoryDialogComponent', () => {
  let component: AppointHistoryDialogComponent;
  let fixture: ComponentFixture<AppointHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointHistoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
