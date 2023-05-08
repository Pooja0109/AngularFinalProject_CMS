import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietChildComponent } from './diet-child.component';

describe('DietChildComponent', () => {
  let component: DietChildComponent;
  let fixture: ComponentFixture<DietChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
