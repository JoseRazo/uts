import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerposAcademicosComponent } from './cuerpos-academicos.component';

describe('CuerposAcademicosComponent', () => {
  let component: CuerposAcademicosComponent;
  let fixture: ComponentFixture<CuerposAcademicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerposAcademicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerposAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
