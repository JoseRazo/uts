import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgcComponent } from './sgc.component';

describe('SgcComponent', () => {
  let component: SgcComponent;
  let fixture: ComponentFixture<SgcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
