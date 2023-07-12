import { TestBed } from '@angular/core/testing';

import { ModerationPanelService } from './moderation-panel.service';

describe('ModerationPanelService', () => {
  let service: ModerationPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModerationPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
