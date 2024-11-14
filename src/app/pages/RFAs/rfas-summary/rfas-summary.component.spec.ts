import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfasSummaryComponent } from './rfas-summary.component';

describe('RfasSummaryComponent', () => {
  let component: RfasSummaryComponent;
  let fixture: ComponentFixture<RfasSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfasSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfasSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
