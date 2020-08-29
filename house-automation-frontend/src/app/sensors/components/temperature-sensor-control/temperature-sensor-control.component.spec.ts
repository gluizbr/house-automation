import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSensorControlComponent } from './temperature-sensor-control.component';

describe('TemperatureSensorControlComponent', () => {
  let component: TemperatureSensorControlComponent;
  let fixture: ComponentFixture<TemperatureSensorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureSensorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureSensorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
