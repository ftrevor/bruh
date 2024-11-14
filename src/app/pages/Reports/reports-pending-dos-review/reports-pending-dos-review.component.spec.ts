import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPendingDosReviewComponent } from './reports-pending-dos-review.component';

describe('ReportsPendingDosReviewComponent', () => {
  let component: ReportsPendingDosReviewComponent;
  let fixture: ComponentFixture<ReportsPendingDosReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsPendingDosReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsPendingDosReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
