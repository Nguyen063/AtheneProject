import { TestBed } from '@angular/core/testing';

import { ForStudentService } from './for-student.service';

describe('ForStudentService', () => {
  let service: ForStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
