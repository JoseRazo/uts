import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia11Component } from './noticia11.component';

describe('Noticia11Component', () => {
  let component: Noticia11Component;
  let fixture: ComponentFixture<Noticia11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
