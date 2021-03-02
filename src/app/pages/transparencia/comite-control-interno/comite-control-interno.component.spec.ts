import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteControlInternoComponent } from './comite-control-interno.component';

describe('ComiteControlInternoComponent', () => {
  let component: ComiteControlInternoComponent;
  let fixture: ComponentFixture<ComiteControlInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteControlInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
