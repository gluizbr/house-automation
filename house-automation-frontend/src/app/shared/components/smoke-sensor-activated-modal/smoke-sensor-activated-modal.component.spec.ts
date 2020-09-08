import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeSensorActivatedModalComponent } from './smoke-sensor-activated-modal.component';

describe('SmokeSensorActivatedModalComponent', () => {
  let component: SmokeSensorActivatedModalComponent;
  let fixture: ComponentFixture<SmokeSensorActivatedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeSensorActivatedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeSensorActivatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
