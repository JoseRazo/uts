import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia04Component } from './noticia04.component';

describe('Noticia04Component', () => {
  let component: Noticia04Component;
  let fixture: ComponentFixture<Noticia04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
