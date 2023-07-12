import { TestBed } from '@angular/core/testing';

import { CoinRewardService } from './coin-reward.service';

describe('CoinRewardService', () => {
  let service: CoinRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
