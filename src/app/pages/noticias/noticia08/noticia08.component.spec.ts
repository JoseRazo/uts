import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia08Component } from './noticia08.component';

describe('Noticia08Component', () => {
  let component: Noticia08Component;
  let fixture: ComponentFixture<Noticia08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
