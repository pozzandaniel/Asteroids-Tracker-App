import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsTabComponent } from './asteroids-tab.component';

describe('AsteroidsTabComponent', () => {
  let component: AsteroidsTabComponent;
  let fixture: ComponentFixture<AsteroidsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroidsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
