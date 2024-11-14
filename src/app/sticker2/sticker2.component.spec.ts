import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sticker2Component } from './sticker2.component';

describe('Sticker2Component', () => {
  let component: Sticker2Component;
  let fixture: ComponentFixture<Sticker2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sticker2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sticker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
