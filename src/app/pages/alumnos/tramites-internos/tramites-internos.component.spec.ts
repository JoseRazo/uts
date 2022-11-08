import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesInternosComponent } from './tramites-internos.component';

describe('TramitesInternosComponent', () => {
  let component: TramitesInternosComponent;
  let fixture: ComponentFixture<TramitesInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitesInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
