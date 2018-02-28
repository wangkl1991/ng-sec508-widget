import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec508DropdownComponent } from './sec508-dropdown.component';

describe('Sec508DropdownComponent', () => {
  let component: Sec508DropdownComponent;
  let fixture: ComponentFixture<Sec508DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec508DropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec508DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
