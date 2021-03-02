import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNoticiasComponent } from './slider-noticias.component';

describe('SliderNoticiasComponent', () => {
  let component: SliderNoticiasComponent;
  let fixture: ComponentFixture<SliderNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
