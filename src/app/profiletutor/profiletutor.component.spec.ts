import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiletutorComponent } from './profiletutor.component';

describe('ProfiletutorComponent', () => {
  let component: ProfiletutorComponent;
  let fixture: ComponentFixture<ProfiletutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiletutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiletutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
