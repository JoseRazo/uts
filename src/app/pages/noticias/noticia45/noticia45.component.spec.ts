import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia45Component } from './noticia45.component';

describe('Noticia45Component', () => {
  let component: Noticia45Component;
  let fixture: ComponentFixture<Noticia45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
