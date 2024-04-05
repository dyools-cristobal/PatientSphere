import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActionCardComponent } from './dashboard-action-card.component';

describe('DashboardActionCardComponent', () => {
  let component: DashboardActionCardComponent;
  let fixture: ComponentFixture<DashboardActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardActionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
