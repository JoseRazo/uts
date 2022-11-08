import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaTrabajoUtsComponent } from './bolsa-trabajo-uts.component';

describe('BolsaTrabajoUtsComponent', () => {
  let component: BolsaTrabajoUtsComponent;
  let fixture: ComponentFixture<BolsaTrabajoUtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaTrabajoUtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaTrabajoUtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
