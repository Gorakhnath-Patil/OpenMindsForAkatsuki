import { TestBed } from '@angular/core/testing';

import { CommunityListService } from './community-list.service';

describe('CommunityListService', () => {
  let service: CommunityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
