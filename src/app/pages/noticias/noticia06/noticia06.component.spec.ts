import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia06Component } from './noticia06.component';

describe('Noticia06Component', () => {
  let component: Noticia06Component;
  let fixture: ComponentFixture<Noticia06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
