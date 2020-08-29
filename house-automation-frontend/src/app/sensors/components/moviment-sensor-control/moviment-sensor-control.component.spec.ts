import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentSensorControlComponent } from './moviment-sensor-control.component';

describe('MovimentSensorControlComponent', () => {
  let component: MovimentSensorControlComponent;
  let fixture: ComponentFixture<MovimentSensorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentSensorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentSensorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
