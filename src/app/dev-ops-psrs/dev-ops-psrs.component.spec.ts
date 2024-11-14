import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOpsPSRsComponent } from './dev-ops-psrs.component';

describe('DevOpsPSRsComponent', () => {
  let component: DevOpsPSRsComponent;
  let fixture: ComponentFixture<DevOpsPSRsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevOpsPSRsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevOpsPSRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
