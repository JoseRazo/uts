import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia33Component } from './noticia33.component';

describe('Noticia33Component', () => {
  let component: Noticia33Component;
  let fixture: ComponentFixture<Noticia33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
