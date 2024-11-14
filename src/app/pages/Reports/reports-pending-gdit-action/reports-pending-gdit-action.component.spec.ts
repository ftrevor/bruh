import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPendingGditActionComponent } from './reports-pending-gdit-action.component';

describe('ReportsPendingGditActionComponent', () => {
  let component: ReportsPendingGditActionComponent;
  let fixture: ComponentFixture<ReportsPendingGditActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsPendingGditActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsPendingGditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
