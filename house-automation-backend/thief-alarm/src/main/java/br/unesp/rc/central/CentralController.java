package br.unesp.rc.central;

import br.unesp.rc.model.thief.ThiefCentral;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class CentralController {
  private final CentralService centralService;

  public CentralController(CentralService centralService) {
    this.centralService = centralService;
  }

  @GetMapping
  public ThiefCentral getCentralStatus() {
    return centralService.getState();
  }
}
