import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IinComponent } from './iin.component';

describe('IinComponent', () => {
  let component: IinComponent;
  let fixture: ComponentFixture<IinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
