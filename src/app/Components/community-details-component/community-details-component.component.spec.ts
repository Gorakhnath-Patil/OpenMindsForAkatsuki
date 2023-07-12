import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDetailsComponentComponent } from './community-details-component.component';

describe('CommunityDetailsComponentComponent', () => {
  let component: CommunityDetailsComponentComponent;
  let fixture: ComponentFixture<CommunityDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(CommunityDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
