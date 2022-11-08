import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEventosExternosComponent } from './slider-eventos-externos.component';

describe('SliderEventosExternosComponent', () => {
  let component: SliderEventosExternosComponent;
  let fixture: ComponentFixture<SliderEventosExternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEventosExternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEventosExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
