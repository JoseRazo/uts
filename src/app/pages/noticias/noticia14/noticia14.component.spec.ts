import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia14Component } from './noticia14.component';

describe('Noticia14Component', () => {
  let component: Noticia14Component;
  let fixture: ComponentFixture<Noticia14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
