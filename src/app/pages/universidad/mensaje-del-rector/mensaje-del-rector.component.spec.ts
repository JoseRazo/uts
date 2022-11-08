import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDelRectorComponent } from './mensaje-del-rector.component';

describe('MensajeDelRectorComponent', () => {
  let component: MensajeDelRectorComponent;
  let fixture: ComponentFixture<MensajeDelRectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeDelRectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeDelRectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
