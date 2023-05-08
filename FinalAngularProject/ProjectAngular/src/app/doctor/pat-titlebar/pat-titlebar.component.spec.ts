import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatTitlebarComponent } from './pat-titlebar.component';

describe('PatTitlebarComponent', () => {
  let component: PatTitlebarComponent;
  let fixture: ComponentFixture<PatTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatTitlebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
