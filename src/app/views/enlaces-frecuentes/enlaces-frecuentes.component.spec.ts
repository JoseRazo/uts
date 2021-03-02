import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesFrecuentesComponent } from './enlaces-frecuentes.component';

describe('EnlacesFrecuentesComponent', () => {
  let component: EnlacesFrecuentesComponent;
  let fixture: ComponentFixture<EnlacesFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacesFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
