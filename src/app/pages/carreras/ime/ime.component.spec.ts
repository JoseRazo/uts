import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeComponent } from './ime.component';

describe('ImeComponent', () => {
  let component: ImeComponent;
  let fixture: ComponentFixture<ImeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
