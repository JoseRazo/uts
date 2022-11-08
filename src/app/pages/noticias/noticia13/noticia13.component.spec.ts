import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia13Component } from './noticia13.component';

describe('Noticia13Component', () => {
  let component: Noticia13Component;
  let fixture: ComponentFixture<Noticia13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
