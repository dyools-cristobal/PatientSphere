import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGrowthComponent } from './patient-growth.component';

describe('PatientGrowthComponent', () => {
  let component: PatientGrowthComponent;
  let fixture: ComponentFixture<PatientGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientGrowthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
