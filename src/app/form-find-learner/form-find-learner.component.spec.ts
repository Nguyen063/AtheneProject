import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindLearnerComponent } from './form-find-learner.component';

describe('FormFindLearnerComponent', () => {
  let component: FormFindLearnerComponent;
  let fixture: ComponentFixture<FormFindLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFindLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
