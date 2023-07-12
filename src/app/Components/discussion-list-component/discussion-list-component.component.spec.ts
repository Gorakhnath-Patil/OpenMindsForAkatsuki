import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionListComponentComponent } from './discussion-list-component.component';

describe('DiscussionListComponentComponent', () => {
  let component: DiscussionListComponentComponent;
  let fixture: ComponentFixture<DiscussionListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionListComponentComponent]
    });
    fixture = TestBed.createComponent(DiscussionListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
