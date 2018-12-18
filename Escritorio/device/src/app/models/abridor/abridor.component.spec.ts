import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbridorComponent } from './abridor.component';

describe('AbridorComponent', () => {
  let component: AbridorComponent;
  let fixture: ComponentFixture<AbridorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbridorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbridorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
