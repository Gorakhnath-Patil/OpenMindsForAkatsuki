import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityListComponentComponent } from './community-list-component.component';

describe('CommunityListComponentComponent', () => {
  let component: CommunityListComponentComponent;
  let fixture: ComponentFixture<CommunityListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityListComponentComponent]
    });
    fixture = TestBed.createComponent(CommunityListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
