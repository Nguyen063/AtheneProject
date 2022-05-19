import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForlearnerComponent } from './forlearner.component';

describe('ForlearnerComponent', () => {
  let component: ForlearnerComponent;
  let fixture: ComponentFixture<ForlearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForlearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
