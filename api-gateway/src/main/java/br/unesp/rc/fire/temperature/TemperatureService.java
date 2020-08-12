package br.unesp.rc.fire.temperature;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.fire.TemperatureSensor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TemperatureService {
  private static final String FIRE_BASE_URL = "http://localhost:8088/fire";
  private static final String TEMPERATURE_ENDPOINT = "/temperature";

  private final RequestClient requestClient;

  public TemperatureService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  private String buildUrl() {
    return FIRE_BASE_URL + TEMPERATURE_ENDPOINT;
  }

  public ResponseEntity save(TemperatureSensor temperatureSensor) {
    return requestClient.postRequest(buildUrl(), temperatureSensor, TemperatureSensor.class);
  }


  public TemperatureSensor update(String temperatureId, Long temperature) {
    ResponseEntity response = requestClient.putRequest(buildTemperatureUpdateUrl(temperatureId, temperature),
        null, TemperatureSensor.class);
    return null;
  }

  private String buildTemperatureUpdateUrl(String temperatureId, Long temperature) {
    return buildUrl() + "/" + temperatureId + "?temperature=" + temperature;
  }
}
