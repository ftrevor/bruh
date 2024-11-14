import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsReportsComponent } from './dev-ops-reports.component';

describe('DevOpsReportsComponent', () => {
  let component: DevOpsReportsComponent;
  let fixture: ComponentFixture<DevOpsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
