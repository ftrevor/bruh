import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCompletedComponent } from './reports-completed.component';

describe('ReportsCompletedComponent', () => {
  let component: ReportsCompletedComponent;
  let fixture: ComponentFixture<ReportsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
