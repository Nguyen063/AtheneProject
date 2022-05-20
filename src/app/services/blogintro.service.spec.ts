import { TestBed } from '@angular/core/testing';

import { BlogintroService } from './blogintro.service';

describe('BlogintroService', () => {
  let service: BlogintroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogintroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
