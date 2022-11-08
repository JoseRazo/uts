import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia27Component } from './noticia27.component';

describe('Noticia27Component', () => {
  let component: Noticia27Component;
  let fixture: ComponentFixture<Noticia27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
