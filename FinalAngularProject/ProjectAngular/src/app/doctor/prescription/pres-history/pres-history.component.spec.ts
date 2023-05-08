import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresHistoryComponent } from './pres-history.component';

describe('PresHistoryComponent', () => {
  let component: PresHistoryComponent;
  let fixture: ComponentFixture<PresHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
