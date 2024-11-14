import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsCompletedFixedInTestPassedComponent } from './dev-ops-defects-completed-fixed-in-test-passed.component';

describe('DevOpsDefectsCompletedFixedInTestPassedComponent', () => {
  let component: DevOpsDefectsCompletedFixedInTestPassedComponent;
  let fixture: ComponentFixture<DevOpsDefectsCompletedFixedInTestPassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsCompletedFixedInTestPassedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsCompletedFixedInTestPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
