import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRightEnlacesFrecuentesComponent } from './nav-right-enlaces-frecuentes.component';

describe('NavRightEnlacesFrecuentesComponent', () => {
  let component: NavRightEnlacesFrecuentesComponent;
  let fixture: ComponentFixture<NavRightEnlacesFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRightEnlacesFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRightEnlacesFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
