import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia18Component } from './noticia18.component';

describe('Noticia18Component', () => {
  let component: Noticia18Component;
  let fixture: ComponentFixture<Noticia18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
