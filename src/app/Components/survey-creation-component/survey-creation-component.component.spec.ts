import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreationComponentComponent } from './survey-creation-component.component';

describe('SurveyCreationComponentComponent', () => {
  let component: SurveyCreationComponentComponent;
  let fixture: ComponentFixture<SurveyCreationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyCreationComponentComponent]
    });
    fixture = TestBed.createComponent(SurveyCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
