import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia09Component } from './noticia09.component';

describe('Noticia09Component', () => {
  let component: Noticia09Component;
  let fixture: ComponentFixture<Noticia09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
