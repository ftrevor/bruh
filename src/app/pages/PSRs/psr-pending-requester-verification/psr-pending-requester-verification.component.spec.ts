import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRPendingRequesterVerificationComponent } from './psr-pending-requester-verification.component';

describe('PSRPendingRequesterVerificationComponent', () => {
  let component: PSRPendingRequesterVerificationComponent;
  let fixture: ComponentFixture<PSRPendingRequesterVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSRPendingRequesterVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSRPendingRequesterVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
