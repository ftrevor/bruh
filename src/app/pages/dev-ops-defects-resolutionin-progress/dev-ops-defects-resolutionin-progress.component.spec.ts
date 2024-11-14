import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsResolutioninProgressComponent } from './dev-ops-defects-resolutionin-progress.component';

describe('DevOpsDefectsResolutioninProgressComponent', () => {
  let component: DevOpsDefectsResolutioninProgressComponent;
  let fixture: ComponentFixture<DevOpsDefectsResolutioninProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsResolutioninProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsResolutioninProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
