import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRPendingGditActionComponent } from './psr-pending-gdit-action.component';

describe('PSRPendingGditActionComponent', () => {
  let component: PSRPendingGditActionComponent;
  let fixture: ComponentFixture<PSRPendingGditActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSRPendingGditActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSRPendingGditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
