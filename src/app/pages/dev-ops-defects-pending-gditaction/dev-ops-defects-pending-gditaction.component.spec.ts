import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsPendingGDITActionComponent } from './dev-ops-defects-pending-gditaction.component';

describe('DevOpsDefectsPendingGDITActionComponent', () => {
  let component: DevOpsDefectsPendingGDITActionComponent;
  let fixture: ComponentFixture<DevOpsDefectsPendingGDITActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsPendingGDITActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsPendingGDITActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
