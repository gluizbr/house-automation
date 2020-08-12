package br.unesp.rc.fire.smoke;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.fire.SmokeSensor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SmokeService {
  private static final String FIRE_BASE_URL = "http://localhost:8088/fire";
  private static final String ALARM_ENDPOINT = "/smoke";

  private final RequestClient requestClient;

  public SmokeService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  private String buildUrl() {
    return FIRE_BASE_URL + ALARM_ENDPOINT;
  }

  public ResponseEntity save(SmokeSensor smokeSensor) {
    return requestClient.postRequest(buildUrl(), smokeSensor, SmokeSensor.class);
  }

  public SmokeSensor update(String smokeId, boolean active) {
    ResponseEntity response =
        requestClient.putRequest(buildUrl() + "/" + smokeId + "?active=" + active, null, SmokeSensor.class);
    return (SmokeSensor) response.getBody();
  }
}
