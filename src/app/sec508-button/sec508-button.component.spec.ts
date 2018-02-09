import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec508ButtonComponent } from './sec508-button.component';

describe('Sec508ButtonComponent', () => {
  let component: Sec508ButtonComponent;
  let fixture: ComponentFixture<Sec508ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec508ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec508ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
