import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeSensorControlComponent } from './smoke-sensor-control.component';

describe('SmokeSensorControlComponent', () => {
  let component: SmokeSensorControlComponent;
  let fixture: ComponentFixture<SmokeSensorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeSensorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeSensorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
