import { TestBed } from '@angular/core/testing';

import { Projectservr } from './projectserve';

describe('Projectservr', () => {
  let service: Projectservr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projectservr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
