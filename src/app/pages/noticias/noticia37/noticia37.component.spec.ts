import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia37Component } from './noticia37.component';

describe('Noticia37Component', () => {
  let component: Noticia37Component;
  let fixture: ComponentFixture<Noticia37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
