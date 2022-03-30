import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortutorComponent } from './fortutor.component';

describe('FortutorComponent', () => {
  let component: FortutorComponent;
  let fixture: ComponentFixture<FortutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
