import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia07Component } from './noticia07.component';

describe('Noticia07Component', () => {
  let component: Noticia07Component;
  let fixture: ComponentFixture<Noticia07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
