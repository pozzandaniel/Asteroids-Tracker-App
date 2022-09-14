import { TestBed } from '@angular/core/testing';

import { AsteroidsPatternService } from './asteroids-pattern.service';

describe('AsteroidsPatternService', () => {
  let service: AsteroidsPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroidsPatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
