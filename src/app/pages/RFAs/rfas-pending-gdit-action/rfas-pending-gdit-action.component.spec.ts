import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfasPendingGditActionComponent } from './rfas-pending-gdit-action.component';

describe('RfasPendingGditActionComponent', () => {
  let component: RfasPendingGditActionComponent;
  let fixture: ComponentFixture<RfasPendingGditActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfasPendingGditActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfasPendingGditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
