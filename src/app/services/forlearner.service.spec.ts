import { TestBed } from '@angular/core/testing';

import { ForlearnerService } from './forlearner.service';

describe('ForlearnerService', () => {
  let service: ForlearnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForlearnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
