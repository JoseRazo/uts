import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuqaiComponent } from './tsuqai.component';

describe('TsuqaiComponent', () => {
  let component: TsuqaiComponent;
  let fixture: ComponentFixture<TsuqaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuqaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuqaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
