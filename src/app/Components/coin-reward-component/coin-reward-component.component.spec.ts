import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRewardComponentComponent } from './coin-reward-component.component';

describe('CoinRewardComponentComponent', () => {
  let component: CoinRewardComponentComponent;
  let fixture: ComponentFixture<CoinRewardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinRewardComponentComponent]
    });
    fixture = TestBed.createComponent(CoinRewardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
