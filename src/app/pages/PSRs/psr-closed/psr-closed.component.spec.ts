import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsrClosedComponent } from './psr-closed.component';

describe('PsrClosedComponent', () => {
  let component: PsrClosedComponent;
  let fixture: ComponentFixture<PsrClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsrClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsrClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
