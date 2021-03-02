import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia16Component } from './noticia16.component';

describe('Noticia16Component', () => {
  let component: Noticia16Component;
  let fixture: ComponentFixture<Noticia16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
