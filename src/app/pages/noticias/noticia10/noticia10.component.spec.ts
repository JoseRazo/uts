import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia10Component } from './noticia10.component';

describe('Noticia10Component', () => {
  let component: Noticia10Component;
  let fixture: ComponentFixture<Noticia10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
