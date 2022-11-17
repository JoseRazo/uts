import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia39Component } from './noticia39.component';

describe('Noticia39Component', () => {
  let component: Noticia39Component;
  let fixture: ComponentFixture<Noticia39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
