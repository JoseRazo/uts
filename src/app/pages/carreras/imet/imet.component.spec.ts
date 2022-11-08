import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImetComponent } from './imet.component';

describe('ImetComponent', () => {
  let component: ImetComponent;
  let fixture: ComponentFixture<ImetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
