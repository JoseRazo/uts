import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuqamComponent } from './tsuqam.component';

describe('TsuqamComponent', () => {
  let component: TsuqamComponent;
  let fixture: ComponentFixture<TsuqamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuqamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuqamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
