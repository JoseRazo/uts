import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilidadEstudiantilComponent } from './movilidad-estudiantil.component';

describe('MovilidadEstudiantilComponent', () => {
  let component: MovilidadEstudiantilComponent;
  let fixture: ComponentFixture<MovilidadEstudiantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovilidadEstudiantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovilidadEstudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
