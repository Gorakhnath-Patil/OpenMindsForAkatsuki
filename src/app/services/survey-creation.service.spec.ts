import { TestBed } from '@angular/core/testing';

import { SurveyCreationService } from './survey-creation.service';

describe('SurveyCreationService', () => {
  let service: SurveyCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
