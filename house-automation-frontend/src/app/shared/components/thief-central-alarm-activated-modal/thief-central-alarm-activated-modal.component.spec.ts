import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefCentralAlarmActivatedModalComponent } from './thief-central-alarm-activated-modal.component';

describe('ThiefCentralAlarmActivatedModalComponent', () => {
  let component: ThiefCentralAlarmActivatedModalComponent;
  let fixture: ComponentFixture<ThiefCentralAlarmActivatedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiefCentralAlarmActivatedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefCentralAlarmActivatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
