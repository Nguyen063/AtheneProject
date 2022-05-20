import { TestBed } from '@angular/core/testing';

import { FortutorService } from './fortutor.service';

describe('FortutorService', () => {
  let service: FortutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
