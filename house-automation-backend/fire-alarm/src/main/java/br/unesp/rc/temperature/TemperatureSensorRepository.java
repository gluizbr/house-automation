package br.unesp.rc.temperature;

import br.unesp.rc.model.fire.TemperatureSensor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TemperatureSensorRepository extends MongoRepository<TemperatureSensor, String> {
  Optional<TemperatureSensor> findByName(String name);
}
