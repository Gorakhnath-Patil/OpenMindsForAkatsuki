import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCreationComponentComponent } from './community-creation-component.component';

describe('CommunityCreationComponentComponent', () => {
  let component: CommunityCreationComponentComponent;
  let fixture: ComponentFixture<CommunityCreationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCreationComponentComponent]
    });
    fixture = TestBed.createComponent(CommunityCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
