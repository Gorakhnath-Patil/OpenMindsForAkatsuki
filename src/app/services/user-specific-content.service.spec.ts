import { TestBed } from '@angular/core/testing';

import { UserSpecificContentService } from './user-specific-content.service';

describe('UserSpecificContentService', () => {
  let service: UserSpecificContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSpecificContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
