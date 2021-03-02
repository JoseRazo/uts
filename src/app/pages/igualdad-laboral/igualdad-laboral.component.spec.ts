import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgualdadLaboralComponent } from './igualdad-laboral.component';

describe('IgualdadLaboralComponent', () => {
  let component: IgualdadLaboralComponent;
  let fixture: ComponentFixture<IgualdadLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgualdadLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgualdadLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
