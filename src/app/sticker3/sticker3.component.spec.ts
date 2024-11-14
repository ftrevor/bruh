import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker3Component } from './sticker3.component';

describe('Sticker3Component', () => {
  let component: Sticker3Component;
  let fixture: ComponentFixture<Sticker3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
