import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia24Component } from './noticia24.component';

describe('Noticia24Component', () => {
  let component: Noticia24Component;
  let fixture: ComponentFixture<Noticia24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
