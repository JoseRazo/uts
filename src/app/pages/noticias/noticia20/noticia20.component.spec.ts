import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia20Component } from './noticia20.component';

describe('Noticia20Component', () => {
  let component: Noticia20Component;
  let fixture: ComponentFixture<Noticia20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
