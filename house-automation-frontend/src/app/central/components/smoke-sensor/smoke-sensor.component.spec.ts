import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeSensorComponent } from './smoke-sensor.component';

describe('SmokeSensorComponent', () => {
  let component: SmokeSensorComponent;
  let fixture: ComponentFixture<SmokeSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
