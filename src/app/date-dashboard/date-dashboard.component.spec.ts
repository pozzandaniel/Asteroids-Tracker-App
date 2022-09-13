import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDashboardComponent } from './date-dashboard.component';

describe('DateDashboardComponent', () => {
  let component: DateDashboardComponent;
  let fixture: ComponentFixture<DateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
