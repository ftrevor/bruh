import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfasPendingDohVerificationComponent } from './rfas-pending-doh-verification.component';

describe('RfasPendingDohVerificationComponent', () => {
  let component: RfasPendingDohVerificationComponent;
  let fixture: ComponentFixture<RfasPendingDohVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfasPendingDohVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfasPendingDohVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
