import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPanelComponentComponent } from './management-panel-component.component';

describe('ManagementPanelComponentComponent', () => {
  let component: ManagementPanelComponentComponent;
  let fixture: ComponentFixture<ManagementPanelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementPanelComponentComponent]
    });
    fixture = TestBed.createComponent(ManagementPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
