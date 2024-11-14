import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAutomatedReportComponent } from './reports-automated-report.component';

describe('ReportsAutomatedReportComponent', () => {
  let component: ReportsAutomatedReportComponent;
  let fixture: ComponentFixture<ReportsAutomatedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAutomatedReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAutomatedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
