import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesOrganismosInteresComponent } from './enlaces-organismos-interes.component';

describe('EnlacesOrganismosInteresComponent', () => {
  let component: EnlacesOrganismosInteresComponent;
  let fixture: ComponentFixture<EnlacesOrganismosInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacesOrganismosInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesOrganismosInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
