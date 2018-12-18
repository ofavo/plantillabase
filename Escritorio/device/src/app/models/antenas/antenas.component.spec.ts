import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenasComponent } from './antenas.component';

describe('AntenasComponent', () => {
  let component: AntenasComponent;
  let fixture: ComponentFixture<AntenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
