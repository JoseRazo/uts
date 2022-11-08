import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia26Component } from './noticia26.component';

describe('Noticia26Component', () => {
  let component: Noticia26Component;
  let fixture: ComponentFixture<Noticia26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
