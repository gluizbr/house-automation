package br.unesp.rc.moviment;

import br.unesp.rc.model.thief.MovimentSensor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class MovimentService {
  private final MovimentSensorRepository movimentSensorRepository;

  public MovimentService(MovimentSensorRepository movimentSensorRepository) {
    this.movimentSensorRepository = movimentSensorRepository;
  }

  public ResponseEntity save(MovimentSensor movimentSensor) {
    if (!StringUtils.isEmpty(movimentSensor.getId())) {
      return ResponseEntity.badRequest().body("To create sensor, id must be null, use update instead");
    }
    if (StringUtils.isEmpty(movimentSensor.getName())) {
      return ResponseEntity.badRequest().body("Name must not be null");
    }
    if (movimentSensorRepository.findByName(movimentSensor.getName()).isPresent()) {
      return ResponseEntity.badRequest().body("Sensor already exists, update instead");
    }
    movimentSensor.setLastEventTime(Instant.now());
    return ResponseEntity.ok(movimentSensorRepository.save(movimentSensor));
  }

  public List<MovimentSensor> findAll() {
    return movimentSensorRepository.findAll();
  }

  public MovimentSensor findById(String temperatureId) {
    return movimentSensorRepository.findById(temperatureId).orElseGet(() -> null);
  }

  public MovimentSensor update(String temperatureId) {
    Optional<MovimentSensor> sensor = movimentSensorRepository.findById(temperatureId);
    if (sensor.isPresent()) {
      sensor.get().setLastEventTime(Instant.now());
      return movimentSensorRepository.save(sensor.get());
    }
    return null;
  }
}
