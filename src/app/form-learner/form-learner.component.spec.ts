import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLearnerComponent } from './form-learner.component';

describe('FormLearnerComponent', () => {
  let component: FormLearnerComponent;
  let fixture: ComponentFixture<FormLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
