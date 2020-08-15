package br.unesp.rc.smoke;

import br.unesp.rc.model.fire.SmokeSensor;
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
@RequestMapping("/smoke")
public class SmokeController {
  private final SmokeService smokeService;

  public SmokeController(final SmokeService smokeService) {
    this.smokeService = smokeService;
  }

  @ResponseStatus(HttpStatus.OK)
  @PostMapping
  public ResponseEntity createSmokeSensor(@RequestBody SmokeSensor smokeSensor) {
    return smokeService.save(smokeSensor);
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping
  public List<SmokeSensor> findAllSmokeSensor() {
    return smokeService.findAll();
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/{smokeId}")
  public SmokeSensor findById(@PathVariable("smokeId") String smokeId) {
    return smokeService.findById(smokeId);
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/{smokeId}")
  public ResponseEntity updateSmokeSensor(@PathVariable("smokeId") String smokeId,
      @RequestParam(value = "active") boolean active) {
    if (StringUtils.isEmpty(smokeId)) {
      return ResponseEntity.badRequest().body("Id must not be null");
    }
    return ResponseEntity.ok(smokeService.update(smokeId, active));
  }
}
