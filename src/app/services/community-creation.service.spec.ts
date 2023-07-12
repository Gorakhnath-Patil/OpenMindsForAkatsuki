import { TestBed } from '@angular/core/testing';

import { CommunityCreationService } from './community-creation.service';

describe('CommunityCreationService', () => {
  let service: CommunityCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
