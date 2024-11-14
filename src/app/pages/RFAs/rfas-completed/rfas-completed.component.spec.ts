import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfasCompletedComponent } from './rfas-completed.component';

describe('RfasCompletedComponent', () => {
  let component: RfasCompletedComponent;
  let fixture: ComponentFixture<RfasCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfasCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfasCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
