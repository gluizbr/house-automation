package br.unesp.rc.alarm;

import br.unesp.rc.model.thief.Alarm;
import br.unesp.rc.moviment.MovimentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlarmService {
  private final AlarmRepository alarmRepository;
  private final MovimentService movimentService;

  public AlarmService(AlarmRepository alarmRepository, final MovimentService movimentService) {
    this.alarmRepository = alarmRepository;
    this.movimentService = movimentService;
  }

  private Alarm create() {
    return alarmRepository.save(Alarm.builder().active(true).build());
  }

  private Alarm createDeactivated() {
    return alarmRepository.save(Alarm.builder().active(false).build());
  }

  public Alarm getAlarmStatus() {
    List<Alarm> alarm = alarmRepository.findAll();
    if (alarm.isEmpty()) {
      return create();
    }
    return alarm.get(0);
  }

  public Alarm active() {
    movimentService.clearMovimentSensorState();
    List<Alarm> alarm = alarmRepository.findAll();
    if (alarm.isEmpty()) {
      return create();
    }
    alarm.get(0).setActive(true);
    return alarmRepository.save(alarm.get(0));
  }

  public Alarm deactivate() {
    movimentService.clearMovimentSensorState();
    List<Alarm> alarm = alarmRepository.findAll();
    if (alarm.isEmpty()) {
      return createDeactivated();
    }
    alarm.get(0).setActive(false);
    return alarmRepository.save(alarm.get(0));
  }
}
