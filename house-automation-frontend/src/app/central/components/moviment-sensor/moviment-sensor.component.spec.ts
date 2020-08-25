import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentSensorComponent } from './moviment-sensor.component';

describe('MovimentSensorComponent', () => {
  let component: MovimentSensorComponent;
  let fixture: ComponentFixture<MovimentSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
