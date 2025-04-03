import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IasComponent } from './ias.component';

describe('IasComponent', () => {
  let component: IasComponent;
  let fixture: ComponentFixture<IasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
