package br.unesp.rc.model.fire;

import br.unesp.rc.model.comon.Sensor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TemperatureSensor extends Sensor {
  private Long temperature;
}
