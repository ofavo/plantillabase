import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoComponent } from './circuito.component';

describe('CamarasComponent', () => {
  let component: CircuitoComponent;
  let fixture: ComponentFixture<CircuitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
