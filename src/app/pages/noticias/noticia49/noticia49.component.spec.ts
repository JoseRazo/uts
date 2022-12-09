import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia49Component } from './noticia49.component';

describe('Noticia49Component', () => {
  let component: Noticia49Component;
  let fixture: ComponentFixture<Noticia49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
