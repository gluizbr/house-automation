package br.unesp.rc.moviment;

import br.unesp.rc.model.thief.MovimentSensor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.util.StringUtils;

import java.util.List;

@RestController
@RequestMapping("/moviment")
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
  @GetMapping
  public List<MovimentSensor> findAllMovimentSensor() {
    return movimentService.findAll();
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/{movimentId}")
  public MovimentSensor findById(@PathVariable("movimentId") String temperatureId) {
    return movimentService.findById(temperatureId);
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/{movimentId}")
  public ResponseEntity movimentSensor(@PathVariable("movimentId") String temperatureId) {
    if (StringUtils.isEmpty(temperatureId)) {
      return ResponseEntity.badRequest().body("Id must not be null");
    }
    return ResponseEntity.ok(movimentService.update(temperatureId));
  }
}
