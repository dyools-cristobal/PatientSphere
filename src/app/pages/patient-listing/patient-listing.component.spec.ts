import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListingComponent } from './patient-listing.component';

describe('PatientListingComponent', () => {
  let component: PatientListingComponent;
  let fixture: ComponentFixture<PatientListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
