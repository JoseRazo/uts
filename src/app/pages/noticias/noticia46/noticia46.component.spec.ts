import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia46Component } from './noticia46.component';

describe('Noticia46Component', () => {
  let component: Noticia46Component;
  let fixture: ComponentFixture<Noticia46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
