import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia03Component } from './noticia03.component';

describe('Noticia03Component', () => {
  let component: Noticia03Component;
  let fixture: ComponentFixture<Noticia03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
