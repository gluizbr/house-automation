package br.unesp.rc.model.thief;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ThiefCentral {
  private List<MovimentSensor> movimentSensors;
  private boolean callingCops;
  private Alarm alarm;
  private AlarmState alarmState;
}
