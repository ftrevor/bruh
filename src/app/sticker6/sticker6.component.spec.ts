import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker6Component } from './sticker6.component';

describe('Sticker6Component', () => {
  let component: Sticker6Component;
  let fixture: ComponentFixture<Sticker6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
