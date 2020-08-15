package br.unesp.rc.model;

import br.unesp.rc.model.fire.FireCentral;
import br.unesp.rc.model.thief.ThiefCentral;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Central {
  private FireCentral fireCentral;
  private ThiefCentral thiefCentral;
}
