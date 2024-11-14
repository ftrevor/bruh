import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker4Component } from './sticker4.component';

describe('Sticker4Component', () => {
  let component: Sticker4Component;
  let fixture: ComponentFixture<Sticker4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
