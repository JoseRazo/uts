import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuadmComponent } from './tsuadm.component';

describe('TsuadmComponent', () => {
  let component: TsuadmComponent;
  let fixture: ComponentFixture<TsuadmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuadmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
