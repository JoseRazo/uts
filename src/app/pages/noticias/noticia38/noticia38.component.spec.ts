import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia38Component } from './noticia38.component';

describe('Noticia38Component', () => {
  let component: Noticia38Component;
  let fixture: ComponentFixture<Noticia38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
