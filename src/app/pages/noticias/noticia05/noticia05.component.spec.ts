import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia05Component } from './noticia05.component';

describe('Noticia05Component', () => {
  let component: Noticia05Component;
  let fixture: ComponentFixture<Noticia05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
