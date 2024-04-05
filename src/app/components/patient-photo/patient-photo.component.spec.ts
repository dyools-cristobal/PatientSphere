import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPhotoComponent } from './patient-photo.component';

describe('PatientPhotoComponent', () => {
  let component: PatientPhotoComponent;
  let fixture: ComponentFixture<PatientPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
