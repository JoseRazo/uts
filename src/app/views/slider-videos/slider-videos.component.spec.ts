import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVideosComponent } from './slider-videos.component';

describe('SliderVideosComponent', () => {
  let component: SliderVideosComponent;
  let fixture: ComponentFixture<SliderVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
