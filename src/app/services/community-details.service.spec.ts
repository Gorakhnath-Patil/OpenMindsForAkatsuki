import { TestBed } from '@angular/core/testing';

import { CommunityDetailsService } from './community-details.service';

describe('CommunityDetailsService', () => {
  let service: CommunityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
