import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRSummaryComponent } from './psr-summary.component';

describe('PSRSummaryComponent', () => {
  let component: PSRSummaryComponent;
  let fixture: ComponentFixture<PSRSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSRSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSRSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
