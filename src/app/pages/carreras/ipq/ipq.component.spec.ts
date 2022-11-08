import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpqComponent } from './ipq.component';

describe('IpqComponent', () => {
  let component: IpqComponent;
  let fixture: ComponentFixture<IpqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
