import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsClosedFixedComponent } from './defects-closed-fixed.component';

describe('DefectsClosedFixedComponent', () => {
  let component: DefectsClosedFixedComponent;
  let fixture: ComponentFixture<DefectsClosedFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectsClosedFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefectsClosedFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
