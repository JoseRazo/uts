import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTecnologicosComponent } from './servicios-tecnologicos.component';

describe('ServiciosTecnologicosComponent', () => {
  let component: ServiciosTecnologicosComponent;
  let fixture: ComponentFixture<ServiciosTecnologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosTecnologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
