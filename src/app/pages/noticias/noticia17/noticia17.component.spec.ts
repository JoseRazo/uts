import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia17Component } from './noticia17.component';

describe('Noticia17Component', () => {
  let component: Noticia17Component;
  let fixture: ComponentFixture<Noticia17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
