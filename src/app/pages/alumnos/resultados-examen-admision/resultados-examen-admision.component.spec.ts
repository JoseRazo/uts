import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosExamenAdmisionComponent } from './resultados-examen-admision.component';

describe('ResultadosExamenAdmisionComponent', () => {
  let component: ResultadosExamenAdmisionComponent;
  let fixture: ComponentFixture<ResultadosExamenAdmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosExamenAdmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosExamenAdmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
