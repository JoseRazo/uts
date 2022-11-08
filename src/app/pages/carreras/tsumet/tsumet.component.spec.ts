import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsumetComponent } from './tsumet.component';

describe('TsumetComponent', () => {
  let component: TsumetComponent;
  let fixture: ComponentFixture<TsumetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsumetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsumetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
