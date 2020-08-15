package br.unesp.rc.thief.moviment;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.thief.MovimentSensor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MovimentService {
  private static final String THIEF_BASE_URL = "http://localhost:8089/thief";
  private static final String MOVIMENT_ENDPOINT = "/moviment";

  private final RequestClient requestClient;

  public MovimentService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  private String buildMovimentUrl() {
    return THIEF_BASE_URL + MOVIMENT_ENDPOINT;
  }

  public ResponseEntity save(MovimentSensor movimentSensor) {
    return requestClient.postRequest(buildMovimentUrl(), movimentSensor);
  }

  public MovimentSensor update(String movimentId) {
    ResponseEntity response =
        requestClient.putRequest(buildMovimentUrl() + "/" + movimentId, null, MovimentSensor.class);
    return (MovimentSensor) response.getBody();
  }
}
