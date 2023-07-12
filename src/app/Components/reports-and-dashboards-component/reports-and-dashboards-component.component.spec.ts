import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAndDashboardsComponentComponent } from './reports-and-dashboards-component.component';

describe('ReportsAndDashboardsComponentComponent', () => {
  let component: ReportsAndDashboardsComponentComponent;
  let fixture: ComponentFixture<ReportsAndDashboardsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsAndDashboardsComponentComponent]
    });
    fixture = TestBed.createComponent(ReportsAndDashboardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
