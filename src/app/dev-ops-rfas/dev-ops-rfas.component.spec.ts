import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsRFAsComponent } from './dev-ops-rfas.component';

describe('DevOpsRFAsComponent', () => {
  let component: DevOpsRFAsComponent;
  let fixture: ComponentFixture<DevOpsRFAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsRFAsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsRFAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
