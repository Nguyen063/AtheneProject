import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAtheneComponent } from './content-athene.component';

describe('ContentAtheneComponent', () => {
  let component: ContentAtheneComponent;
  let fixture: ComponentFixture<ContentAtheneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAtheneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAtheneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
