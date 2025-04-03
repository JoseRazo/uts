import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IedComponent } from './ied.component';

describe('IedComponent', () => {
  let component: IedComponent;
  let fixture: ComponentFixture<IedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
