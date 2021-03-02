import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteaComponent } from './itea.component';

describe('IteaComponent', () => {
  let component: IteaComponent;
  let fixture: ComponentFixture<IteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
