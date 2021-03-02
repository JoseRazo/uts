import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia25Component } from './noticia25.component';

describe('Noticia25Component', () => {
  let component: Noticia25Component;
  let fixture: ComponentFixture<Noticia25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
