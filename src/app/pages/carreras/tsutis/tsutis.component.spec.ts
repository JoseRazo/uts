import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsutisComponent } from './tsutis.component';

describe('TsutisComponent', () => {
  let component: TsutisComponent;
  let fixture: ComponentFixture<TsutisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsutisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsutisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
