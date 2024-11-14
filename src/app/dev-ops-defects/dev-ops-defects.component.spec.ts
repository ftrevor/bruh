import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsDefectsComponent } from './dev-ops-defects.component';

describe('DevOpsDefectsComponent', () => {
  let component: DevOpsDefectsComponent;
  let fixture: ComponentFixture<DevOpsDefectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsDefectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
