import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosCooperacionComponent } from './convenios-cooperacion.component';

describe('ConveniosCooperacionComponent', () => {
  let component: ConveniosCooperacionComponent;
  let fixture: ComponentFixture<ConveniosCooperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniosCooperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosCooperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
