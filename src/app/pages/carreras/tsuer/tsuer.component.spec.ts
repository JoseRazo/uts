import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuerComponent } from './tsuer.component';

describe('TsuerComponent', () => {
  let component: TsuerComponent;
  let fixture: ComponentFixture<TsuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
