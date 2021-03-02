import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoDerechosEducativosComponent } from './costo-derechos-educativos.component';

describe('CostoDerechosEducativosComponent', () => {
  let component: CostoDerechosEducativosComponent;
  let fixture: ComponentFixture<CostoDerechosEducativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostoDerechosEducativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoDerechosEducativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
