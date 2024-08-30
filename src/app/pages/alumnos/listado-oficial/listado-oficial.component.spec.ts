import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOficialComponent } from './listado-oficial.component';

describe('ListadoOficialComponent', () => {
  let component: ListadoOficialComponent;
  let fixture: ComponentFixture<ListadoOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
