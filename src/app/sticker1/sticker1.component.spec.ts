import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker1Component } from './sticker1.component';

describe('Sticker1Component', () => {
  let component: Sticker1Component;
  let fixture: ComponentFixture<Sticker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
