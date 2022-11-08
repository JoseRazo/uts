import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia23Component } from './noticia23.component';

describe('Noticia23Component', () => {
  let component: Noticia23Component;
  let fixture: ComponentFixture<Noticia23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
