import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia19Component } from './noticia19.component';

describe('Noticia19Component', () => {
  let component: Noticia19Component;
  let fixture: ComponentFixture<Noticia19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
