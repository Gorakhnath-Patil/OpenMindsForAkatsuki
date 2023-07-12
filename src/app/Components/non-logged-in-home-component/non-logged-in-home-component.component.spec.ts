import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLoggedInHomeComponentComponent } from './non-logged-in-home-component.component';

describe('NonLoggedInHomeComponentComponent', () => {
  let component: NonLoggedInHomeComponentComponent;
  let fixture: ComponentFixture<NonLoggedInHomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonLoggedInHomeComponentComponent]
    });
    fixture = TestBed.createComponent(NonLoggedInHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
