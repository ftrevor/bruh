import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAwaitingDcComponent } from './reports-awaiting-dc.component';

describe('ReportsAwaitingDcComponent', () => {
  let component: ReportsAwaitingDcComponent;
  let fixture: ComponentFixture<ReportsAwaitingDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAwaitingDcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAwaitingDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
