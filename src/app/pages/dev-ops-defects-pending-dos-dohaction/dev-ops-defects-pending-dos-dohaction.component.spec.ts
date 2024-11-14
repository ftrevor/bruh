import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsPendingDOSDOHActionComponent } from './dev-ops-defects-pending-dos-dohaction.component';

describe('DevOpsDefectsPendingDOSDOHActionComponent', () => {
  let component: DevOpsDefectsPendingDOSDOHActionComponent;
  let fixture: ComponentFixture<DevOpsDefectsPendingDOSDOHActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsPendingDOSDOHActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsPendingDOSDOHActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
