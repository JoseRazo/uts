import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia22Component } from './noticia22.component';

describe('Noticia22Component', () => {
  let component: Noticia22Component;
  let fixture: ComponentFixture<Noticia22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
