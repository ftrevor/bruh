import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPendingDosVerificationComponent } from './reports-pending-dos-verification.component';

describe('ReportsPendingDosVerificationComponent', () => {
  let component: ReportsPendingDosVerificationComponent;
  let fixture: ComponentFixture<ReportsPendingDosVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsPendingDosVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsPendingDosVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
