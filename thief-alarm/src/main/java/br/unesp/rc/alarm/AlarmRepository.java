package br.unesp.rc.alarm;

import br.unesp.rc.model.thief.Alarm;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlarmRepository extends MongoRepository<Alarm, String> {}
