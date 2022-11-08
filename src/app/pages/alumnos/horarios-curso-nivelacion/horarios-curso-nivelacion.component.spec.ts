import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosCursoNivelacionComponent } from './horarios-curso-nivelacion.component';

describe('HorariosCursoNivelacionComponent', () => {
  let component: HorariosCursoNivelacionComponent;
  let fixture: ComponentFixture<HorariosCursoNivelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosCursoNivelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosCursoNivelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
