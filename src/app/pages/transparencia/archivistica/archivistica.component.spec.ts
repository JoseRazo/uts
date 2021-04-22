import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivisticaComponent } from './archivistica.component';

describe('ArchivisticaComponent', () => {
  let component: ArchivisticaComponent;
  let fixture: ComponentFixture<ArchivisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
