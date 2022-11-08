import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia28Component } from './noticia28.component';

describe('Noticia28Component', () => {
  let component: Noticia28Component;
  let fixture: ComponentFixture<Noticia28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
