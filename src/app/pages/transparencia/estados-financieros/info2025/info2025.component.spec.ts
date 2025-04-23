import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info2025Component } from './info2025.component';

describe('Info2025Component', () => {
  let component: Info2025Component;
  let fixture: ComponentFixture<Info2025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info2025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
