import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsSummaryComponent } from './dev-ops-defects-summary.component';

describe('DevOpsDefectsSummaryComponent', () => {
  let component: DevOpsDefectsSummaryComponent;
  let fixture: ComponentFixture<DevOpsDefectsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
