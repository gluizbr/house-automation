package br.unesp.rc.model.fire;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FireCentral {
  private List<SmokeSensor> smokeSensors;
  private List<TemperatureSensor> temperatureSensors;
  private boolean fireman;
  private boolean fire;
}
