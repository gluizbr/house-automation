package br.unesp.rc.central;

import br.unesp.rc.alarm.AlarmService;
import br.unesp.rc.model.thief.Alarm;
import br.unesp.rc.model.thief.AlarmState;
import br.unesp.rc.model.thief.MovimentSensor;
import br.unesp.rc.model.thief.ThiefCentral;
import br.unesp.rc.moviment.MovimentService;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class CentralService {
  private static final long ALARM_TRIGGERED = 20L;
  private static final long COPS_CALLED = 30L;

  private MovimentService movimentService;
  private AlarmService alarmService;

  public CentralService(MovimentService movimentService, AlarmService alarmService) {
    this.movimentService = movimentService;
    this.alarmService = alarmService;
  }

  public ThiefCentral getState() {
    List<MovimentSensor> movimentSensors = movimentService.findAll();
    Alarm alarm = alarmService.getAlarmStatus();

    return ThiefCentral.builder()
        .alarm(alarm)
        .movimentSensors(movimentSensors)
        .alarmState(getAlarmState(alarm, movimentSensors))
        .callingCops(callingCops(alarm, movimentSensors))
        .build();
  }

  private AlarmState getAlarmState(Alarm alarm, List<MovimentSensor> movimentSensors) {
    if (alarm.isActive()) {
      if (movimentSensors.stream()
          .anyMatch(sensor -> calculateDateDiff(sensor.getLastEventTime()) >= ALARM_TRIGGERED)) {
        return AlarmState.ACTIVE;
      }
      if (movimentSensors.stream().anyMatch(sensor -> calculateDateDiff(sensor.getLastEventTime()) != 0
          && calculateDateDiff(sensor.getLastEventTime()) < ALARM_TRIGGERED)) {
        return AlarmState.DETECTED_MOVEMENT;
      }
    }
    return null;
  }

  private boolean callingCops(Alarm alarm, List<MovimentSensor> movimentSensors) {
    if (alarm.isActive()) {
      return movimentSensors.stream()
          .anyMatch(sensor -> calculateDateDiff(sensor.getLastEventTime()) >= COPS_CALLED);
    }
    return false;
  }

  private long calculateDateDiff(Instant time) {
    if (time != null) {
      return ChronoUnit.SECONDS.between(time, Instant.now());
    }
    return 0;
  }
}
