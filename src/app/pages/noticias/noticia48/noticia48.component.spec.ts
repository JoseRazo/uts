import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia48Component } from './noticia48.component';

describe('Noticia48Component', () => {
  let component: Noticia48Component;
  let fixture: ComponentFixture<Noticia48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
