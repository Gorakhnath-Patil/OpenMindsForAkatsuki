import { TestBed } from '@angular/core/testing';

import { NonLoggedInHomeService } from './non-logged-in-home.service';

describe('NonLoggedInHomeService', () => {
  let service: NonLoggedInHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonLoggedInHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
