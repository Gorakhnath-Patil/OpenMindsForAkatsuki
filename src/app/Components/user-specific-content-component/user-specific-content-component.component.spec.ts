import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecificContentComponentComponent } from './user-specific-content-component.component';

describe('UserSpecificContentComponentComponent', () => {
  let component: UserSpecificContentComponentComponent;
  let fixture: ComponentFixture<UserSpecificContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSpecificContentComponentComponent]
    });
    fixture = TestBed.createComponent(UserSpecificContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
