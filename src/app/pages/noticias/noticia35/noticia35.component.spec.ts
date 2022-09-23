import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia35Component } from './noticia35.component';

describe('Noticia35Component', () => {
  let component: Noticia35Component;
  let fixture: ComponentFixture<Noticia35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
