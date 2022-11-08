import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia02Component } from './noticia02.component';

describe('Noticia02Component', () => {
  let component: Noticia02Component;
  let fixture: ComponentFixture<Noticia02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
