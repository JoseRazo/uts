import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsipComponent } from './isip.component';

describe('IsipComponent', () => {
  let component: IsipComponent;
  let fixture: ComponentFixture<IsipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
