import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioCjmuComponent } from './directorio-cjmu.component';

describe('DirectorioCjmuComponent', () => {
  let component: DirectorioCjmuComponent;
  let fixture: ComponentFixture<DirectorioCjmuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioCjmuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioCjmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
