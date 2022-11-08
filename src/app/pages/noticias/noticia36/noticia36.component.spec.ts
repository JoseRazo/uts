import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia36Component } from './noticia36.component';

describe('Noticia36Component', () => {
  let component: Noticia36Component;
  let fixture: ComponentFixture<Noticia36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
