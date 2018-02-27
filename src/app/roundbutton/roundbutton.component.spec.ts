import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundbuttonComponent } from './roundbutton.component';

describe('RoundbuttonComponent', () => {
  let component: RoundbuttonComponent;
  let fixture: ComponentFixture<RoundbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
