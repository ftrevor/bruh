import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker7Component } from './sticker7.component';

describe('Sticker7Component', () => {
  let component: Sticker7Component;
  let fixture: ComponentFixture<Sticker7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
