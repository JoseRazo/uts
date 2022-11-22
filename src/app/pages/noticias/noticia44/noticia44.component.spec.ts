import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia44Component } from './noticia44.component';

describe('Noticia44Component', () => {
  let component: Noticia44Component;
  let fixture: ComponentFixture<Noticia44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
