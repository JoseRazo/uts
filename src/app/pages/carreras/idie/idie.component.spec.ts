import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdieComponent } from './idie.component';

describe('IdieComponent', () => {
  let component: IdieComponent;
  let fixture: ComponentFixture<IdieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
