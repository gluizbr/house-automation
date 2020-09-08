import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentSensorDetectedModalComponent } from './moviment-sensor-detected-modal.component';

describe('MovimentSensorDetectedModalComponent', () => {
  let component: MovimentSensorDetectedModalComponent;
  let fixture: ComponentFixture<MovimentSensorDetectedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentSensorDetectedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentSensorDetectedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
