package br.unesp.rc.thief.alarm;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/thief/alarm")
public class AlarmController {
  private final AlarmService alarmService;

  public AlarmController(final AlarmService alarmService) {
    this.alarmService = alarmService;
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
