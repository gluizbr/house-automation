package br.unesp.rc.fire.temperature;

import br.unesp.rc.fire.smoke.SmokeService;
import br.unesp.rc.model.fire.SmokeSensor;
import br.unesp.rc.model.fire.TemperatureSensor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.util.StringUtils;

import java.util.List;

@RestController
@RequestMapping("/fire/temperature")
public class TemperatureController {
  private final TemperatureService temperatureService;

  public TemperatureController(final TemperatureService temperatureService) {
    this.temperatureService = temperatureService;
  }

  @ResponseStatus(HttpStatus.OK)
  @PostMapping
  public ResponseEntity createTemperatureSensor(@RequestBody TemperatureSensor temperatureSensor) {
    return temperatureService.save(temperatureSensor);
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/{temperatureId}")
  public ResponseEntity updateTemperatureSensor(@PathVariable("temperatureId") String temperatureId,
      @RequestParam(value = "temperature") Long temperature) {
    if (StringUtils.isEmpty(temperatureId)) {
      return ResponseEntity.badRequest().body("Id must not be null");
    }
    return ResponseEntity.ok(temperatureService.update(temperatureId, temperature));
  }
}

