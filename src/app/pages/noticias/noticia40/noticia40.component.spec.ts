import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia40Component } from './noticia40.component';

describe('Noticia40Component', () => {
  let component: Noticia40Component;
  let fixture: ComponentFixture<Noticia40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
