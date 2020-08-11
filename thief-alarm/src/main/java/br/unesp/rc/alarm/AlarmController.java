package br.unesp.rc.alarm;

import br.unesp.rc.model.thief.Alarm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alarm")
public class AlarmController {
  private final AlarmService alarmService;

  public AlarmController(final AlarmService alarmService) {
    this.alarmService = alarmService;
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping
  public Alarm getAlarmStatus() {
    return alarmService.getAlarmStatus();
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/activate")
  public ResponseEntity activateAlarm() {
    return ResponseEntity.ok(alarmService.active());
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/deactivate")
  public ResponseEntity deactivateAlarm() {
    return ResponseEntity.ok(alarmService.deactivate());
  }
}
