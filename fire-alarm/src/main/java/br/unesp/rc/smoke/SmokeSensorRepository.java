package br.unesp.rc.smoke;

import br.unesp.rc.model.fire.SmokeSensor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SmokeSensorRepository extends MongoRepository<SmokeSensor, String> {
  Optional<SmokeSensor> findByName(String name);
}
