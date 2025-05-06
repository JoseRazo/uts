import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionExtensionUniversitariaComponent } from './vinculacion-extension-universitaria.component';

describe('VinculacionExtensionUniversitariaComponent', () => {
  let component: VinculacionExtensionUniversitariaComponent;
  let fixture: ComponentFixture<VinculacionExtensionUniversitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionExtensionUniversitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionExtensionUniversitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
