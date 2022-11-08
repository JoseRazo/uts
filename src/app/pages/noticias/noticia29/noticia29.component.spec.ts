import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia29Component } from './noticia29.component';

describe('Noticia29Component', () => {
  let component: Noticia29Component;
  let fixture: ComponentFixture<Noticia29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
