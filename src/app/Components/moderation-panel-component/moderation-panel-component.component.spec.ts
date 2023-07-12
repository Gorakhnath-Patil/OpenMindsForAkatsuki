import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationPanelComponentComponent } from './moderation-panel-component.component';

describe('ModerationPanelComponentComponent', () => {
  let component: ModerationPanelComponentComponent;
  let fixture: ComponentFixture<ModerationPanelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModerationPanelComponentComponent]
    });
    fixture = TestBed.createComponent(ModerationPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
