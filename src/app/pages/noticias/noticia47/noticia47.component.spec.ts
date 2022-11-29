import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia47Component } from './noticia47.component';

describe('Noticia47Component', () => {
  let component: Noticia47Component;
  let fixture: ComponentFixture<Noticia47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
