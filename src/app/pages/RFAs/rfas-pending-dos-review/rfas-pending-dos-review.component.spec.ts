import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfasPendingDosReviewComponent } from './rfas-pending-dos-review.component';

describe('RfasPendingDosReviewComponent', () => {
  let component: RfasPendingDosReviewComponent;
  let fixture: ComponentFixture<RfasPendingDosReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfasPendingDosReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfasPendingDosReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
