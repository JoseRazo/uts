import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia15Component } from './noticia15.component';

describe('Noticia15Component', () => {
  let component: Noticia15Component;
  let fixture: ComponentFixture<Noticia15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
