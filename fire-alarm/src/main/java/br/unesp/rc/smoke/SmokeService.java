package br.unesp.rc.smoke;

import br.unesp.rc.model.fire.SmokeSensor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class SmokeService {
  private final SmokeSensorRepository smokeSensorRepository;

  public SmokeService(SmokeSensorRepository smokeSensorRepository) {
    this.smokeSensorRepository = smokeSensorRepository;
  }

  public ResponseEntity save(SmokeSensor smokeSensor) {
    if (!StringUtils.isEmpty(smokeSensor.getId())) {
      return ResponseEntity.badRequest().body("To create sensor, id must be null, use update instead");
    }
    if (StringUtils.isEmpty(smokeSensor.getName())) {
      return ResponseEntity.badRequest().body("Name must not be null");
    }
    if (smokeSensorRepository.findByName(smokeSensor.getName()).isPresent()) {
      return ResponseEntity.badRequest().body("Sensor already exists, update instead");
    }
    smokeSensor.setLastEventTime(Instant.now());
    return ResponseEntity.ok(smokeSensorRepository.save(smokeSensor));
  }

  public List<SmokeSensor> findAll() {
    return smokeSensorRepository.findAll();
  }

  public SmokeSensor findById(String smokeId) {
    return smokeSensorRepository.findById(smokeId).orElseGet(() -> null);
  }

  public SmokeSensor update(String temperatureId, boolean active) {
    Optional<SmokeSensor> sensor = smokeSensorRepository.findById(temperatureId);
    if (sensor.isPresent()) {
      sensor.get().setActive(active);
      sensor.get().setLastEventTime(Instant.now());
      return smokeSensorRepository.save(sensor.get());
    }
    return null;
  }
}
