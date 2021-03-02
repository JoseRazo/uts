import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia12Component } from './noticia12.component';

describe('Noticia12Component', () => {
  let component: Noticia12Component;
  let fixture: ComponentFixture<Noticia12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
