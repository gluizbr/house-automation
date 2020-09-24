package br.unesp.rc.central;

import br.unesp.rc.model.fire.FireCentral;
import br.unesp.rc.model.fire.SmokeSensor;
import br.unesp.rc.model.fire.TemperatureSensor;
import br.unesp.rc.smoke.SmokeService;
import br.unesp.rc.temperature.TemperatureService;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class CentralService {
  private static final long FIRE_TEMPERATURE = 50;
  private static final long FIRE_TIME = 1L;
  private static final long CALL_FIRE_DEPARTMENT = 10L;

  private final SmokeService smokeService;
  private final TemperatureService temperatureService;

  public CentralService(SmokeService smokeService, TemperatureService temperatureService) {
    this.smokeService = smokeService;
    this.temperatureService = temperatureService;
  }

  public FireCentral getState() {
    List<SmokeSensor> smokeSensors = smokeService.findAll();
    List<TemperatureSensor> temperatureSensors = temperatureService.findAll();

    return FireCentral.builder()
        .fire(existFire(smokeSensors, temperatureSensors))
        .fireman(callingFireDepartment(smokeSensors, temperatureSensors))
        .smokeSensors(smokeSensors)
        .temperatureSensors(temperatureSensors)
        .build();
  }

  public boolean existFire(List<SmokeSensor> smokeSensors, List<TemperatureSensor> temperatureSensors) {
    return existsFireForSmokeSensor(smokeSensors) || existsFireForTemperatureSensor(temperatureSensors);
  }

  public boolean existsFireForSmokeSensor(List<SmokeSensor> smokeSensors) {
    return smokeSensors.stream()
        .anyMatch(smokeSensor -> smokeSensor.isActive()
            && calculateDateDiff(smokeSensor.getLastEventTime()) >= FIRE_TIME);
  }

  public boolean existsFireForTemperatureSensor(List<TemperatureSensor> temperatureSensors) {
    return temperatureSensors.stream()
        .anyMatch(temperatureSensor -> temperatureSensor.getTemperature() != null
            && temperatureSensor.getTemperature() >= FIRE_TEMPERATURE);
  }

  public boolean callingFireDepartment(List<SmokeSensor> smokeSensors, List<TemperatureSensor> temperatureSensors) {
    return callingFireDepartmentSmokeSensor(smokeSensors) || existsFireForTemperatureSensor(temperatureSensors);
  }

  public boolean callingFireDepartmentSmokeSensor(List<SmokeSensor> smokeSensors) {
    return smokeSensors.stream()
        .anyMatch(smokeSensor -> smokeSensor.isActive()
            && calculateDateDiff(smokeSensor.getLastEventTime()) >= CALL_FIRE_DEPARTMENT);
  }

  private long calculateDateDiff(Instant time) {
    if (time != null) {
      return ChronoUnit.SECONDS.between(time, Instant.now());
    }
    return 0;
  }
}
