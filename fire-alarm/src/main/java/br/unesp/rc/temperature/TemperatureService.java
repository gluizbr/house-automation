package br.unesp.rc.temperature;

import br.unesp.rc.model.fire.TemperatureSensor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class TemperatureService {
  private final TemperatureSensorRepository temperatureSensorRepository;

  public TemperatureService(TemperatureSensorRepository temperatureSensorRepository) {
    this.temperatureSensorRepository = temperatureSensorRepository;
  }

  public ResponseEntity save(TemperatureSensor temperatureSensor) {
    if (!StringUtils.isEmpty(temperatureSensor.getId())) {
      return ResponseEntity.badRequest().body("To create sensor, id must be null, use update instead");
    }
    if (StringUtils.isEmpty(temperatureSensor.getName())) {
      return ResponseEntity.badRequest().body("Name must not be null");
    }
    if (temperatureSensorRepository.findByName(temperatureSensor.getName()).isPresent()) {
      return ResponseEntity.badRequest().body("Sensor already exists, update instead");
    }
    if (temperatureSensor.getTemperature() == null) {
      temperatureSensor.setTemperature(0L);
    }
    return ResponseEntity.ok(temperatureSensorRepository.save(temperatureSensor));
  }

  public List<TemperatureSensor> findAll() {
    return temperatureSensorRepository.findAll();
  }

  public TemperatureSensor findById(String temperatureId) {
    return temperatureSensorRepository.findById(temperatureId).orElseGet(() -> null);
  }

  public TemperatureSensor update(String temperatureId, Long temperature) {
    Optional<TemperatureSensor> sensor = temperatureSensorRepository.findById(temperatureId);
    if (sensor.isPresent()) {
      sensor.get().setTemperature(temperature);
      return temperatureSensorRepository.save(sensor.get());
    }
    return null;
  }
}
