import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsupiaComponent } from './tsupia.component';

describe('TsupiaComponent', () => {
  let component: TsupiaComponent;
  let fixture: ComponentFixture<TsupiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsupiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsupiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
