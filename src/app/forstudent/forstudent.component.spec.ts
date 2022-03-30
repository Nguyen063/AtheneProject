import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForstudentComponent } from './forstudent.component';

describe('ForstudentComponent', () => {
  let component: ForstudentComponent;
  let fixture: ComponentFixture<ForstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
