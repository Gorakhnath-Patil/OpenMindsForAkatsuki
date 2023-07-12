import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreationComponentComponent } from './post-creation-component.component';

describe('PostCreationComponentComponent', () => {
  let component: PostCreationComponentComponent;
  let fixture: ComponentFixture<PostCreationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreationComponentComponent]
    });
    fixture = TestBed.createComponent(PostCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
