import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info2024Component } from './info2024.component';

describe('Info2024Component', () => {
  let component: Info2024Component;
  let fixture: ComponentFixture<Info2024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info2024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
