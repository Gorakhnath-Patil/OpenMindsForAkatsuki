import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionDetailsComponentComponent } from './discussion-details-component.component';

describe('DiscussionDetailsComponentComponent', () => {
  let component: DiscussionDetailsComponentComponent;
  let fixture: ComponentFixture<DiscussionDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(DiscussionDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
