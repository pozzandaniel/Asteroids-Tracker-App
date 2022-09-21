import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidScheduleComponent } from './asteroid-schedule.component';

describe('AsteroidScheduleComponent', () => {
  let component: AsteroidScheduleComponent;
  let fixture: ComponentFixture<AsteroidScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroidScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
