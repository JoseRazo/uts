import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia30Component } from './noticia30.component';

describe('Noticia30Component', () => {
  let component: Noticia30Component;
  let fixture: ComponentFixture<Noticia30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
