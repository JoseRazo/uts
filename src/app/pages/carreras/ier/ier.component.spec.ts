import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IerComponent } from './ier.component';

describe('IerComponent', () => {
  let component: IerComponent;
  let fixture: ComponentFixture<IerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
