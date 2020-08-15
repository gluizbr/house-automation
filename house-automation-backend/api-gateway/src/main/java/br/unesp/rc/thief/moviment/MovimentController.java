package br.unesp.rc.thief.moviment;

import br.unesp.rc.model.thief.MovimentSensor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.util.StringUtils;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/thief/moviment")
public class MovimentController {
  private final MovimentService movimentService;

  public MovimentController(final MovimentService movimentService) {
    this.movimentService = movimentService;
  }

  @ResponseStatus(HttpStatus.OK)
  @PostMapping
  public ResponseEntity createMovimentSensor(@RequestBody MovimentSensor movimentSensor) {
    return movimentService.save(movimentSensor);
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/{movimentId}")
  public ResponseEntity movimentSensor(@PathVariable("movimentId") String movimentId) {
    if (StringUtils.isEmpty(movimentId)) {
      return ResponseEntity.badRequest().body("Id must not be null");
    }
    return ResponseEntity.ok(movimentService.update(movimentId));
  }
}
