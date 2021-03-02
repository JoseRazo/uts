import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia31Component } from './noticia31.component';

describe('Noticia31Component', () => {
  let component: Noticia31Component;
  let fixture: ComponentFixture<Noticia31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
