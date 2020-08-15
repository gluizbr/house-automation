package br.unesp.rc.central;

import br.unesp.rc.model.Central;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/central")
public class CentralController {
  private final CentralService centralService;

  public CentralController(CentralService centralService) {
    this.centralService = centralService;
  }

  @GetMapping
  public Central getCentralStatus() {
    return centralService.getState();
  }
}
