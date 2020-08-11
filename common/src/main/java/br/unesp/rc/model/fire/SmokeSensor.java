package br.unesp.rc.model.fire;

import br.unesp.rc.model.comon.Sensor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SmokeSensor extends Sensor {
  private Instant lastEventTime;
  private boolean active;
}
