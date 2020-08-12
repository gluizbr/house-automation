package br.unesp.rc.central;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.fire.FireService;
import br.unesp.rc.model.Central;
import br.unesp.rc.thief.ThiefService;
import org.springframework.stereotype.Service;

@Service
public class CentralService {
  private final FireService fireService;
  private final ThiefService thiefService;

  public CentralService(FireService fireService, ThiefService thiefService) {
    this.fireService = fireService;
    this.thiefService = thiefService;
  }

  public Central getState() {
    return Central.builder().thiefCentral(thiefService.getState()).fireCentral(fireService.getState()).build();
  }
}
