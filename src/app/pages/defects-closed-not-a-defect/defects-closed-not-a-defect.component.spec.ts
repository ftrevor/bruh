import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsClosedNotADefectComponent } from './defects-closed-not-a-defect.component';

describe('DefectsClosedNotADefectComponent', () => {
  let component: DefectsClosedNotADefectComponent;
  let fixture: ComponentFixture<DefectsClosedNotADefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectsClosedNotADefectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefectsClosedNotADefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
