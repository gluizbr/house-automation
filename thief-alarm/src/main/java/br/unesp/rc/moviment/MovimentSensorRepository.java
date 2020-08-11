package br.unesp.rc.moviment;

import br.unesp.rc.model.thief.MovimentSensor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MovimentSensorRepository extends MongoRepository<MovimentSensor, String> {
  Optional<MovimentSensor> findByName(String name);
}
