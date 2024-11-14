import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker5Component } from './sticker5.component';

describe('Sticker5Component', () => {
  let component: Sticker5Component;
  let fixture: ComponentFixture<Sticker5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
