import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia01Component } from './noticia01.component';

describe('Noticia01Component', () => {
  let component: Noticia01Component;
  let fixture: ComponentFixture<Noticia01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
