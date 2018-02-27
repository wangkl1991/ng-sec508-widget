import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec508ListboxComponent } from './sec508-listbox.component';

describe('Sec508ListboxComponent', () => {
  let component: Sec508ListboxComponent;
  let fixture: ComponentFixture<Sec508ListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec508ListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec508ListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
