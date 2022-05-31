import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprofilesComponent } from './showprofiles.component';

describe('ShowprofilesComponent', () => {
  let component: ShowprofilesComponent;
  let fixture: ComponentFixture<ShowprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
