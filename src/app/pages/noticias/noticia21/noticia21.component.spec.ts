import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia21Component } from './noticia21.component';

describe('Noticia21Component', () => {
  let component: Noticia21Component;
  let fixture: ComponentFixture<Noticia21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
