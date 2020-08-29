import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSensorActivatedModalComponent } from './temperature-sensor-activated-modal.component';

describe('TemperatureSensorActivatedModalComponent', () => {
  let component: TemperatureSensorActivatedModalComponent;
  let fixture: ComponentFixture<TemperatureSensorActivatedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureSensorActivatedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureSensorActivatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
