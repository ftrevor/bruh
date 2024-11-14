import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker8Component } from './sticker8.component';

describe('Sticker8Component', () => {
  let component: Sticker8Component;
  let fixture: ComponentFixture<Sticker8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
