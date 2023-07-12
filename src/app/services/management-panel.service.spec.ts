import { TestBed } from '@angular/core/testing';

import { ManagementPanelService } from './management-panel.service';

describe('ManagementPanelService', () => {
  let service: ManagementPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
