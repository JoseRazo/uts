import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia34Component } from './noticia34.component';

describe('Noticia34Component', () => {
  let component: Noticia34Component;
  let fixture: ComponentFixture<Noticia34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
