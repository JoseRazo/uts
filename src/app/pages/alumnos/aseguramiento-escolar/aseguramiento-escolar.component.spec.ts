import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguramientoEscolarComponent } from './aseguramiento-escolar.component';

describe('AseguramientoEscolarComponent', () => {
  let component: AseguramientoEscolarComponent;
  let fixture: ComponentFixture<AseguramientoEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguramientoEscolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguramientoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
