import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRPendingDosReviewComponent } from './psr-pending-dos-review.component';

describe('PSRPendingDosReviewComponent', () => {
  let component: PSRPendingDosReviewComponent;
  let fixture: ComponentFixture<PSRPendingDosReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSRPendingDosReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSRPendingDosReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
