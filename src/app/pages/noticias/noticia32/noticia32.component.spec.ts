import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia32Component } from './noticia32.component';

describe('Noticia32Component', () => {
  let component: Noticia32Component;
  let fixture: ComponentFixture<Noticia32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
