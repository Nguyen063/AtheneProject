import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindTutorComponent } from './form-find-tutor.component';

describe('FormFindTutorComponent', () => {
  let component: FormFindTutorComponent;
  let fixture: ComponentFixture<FormFindTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFindTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
