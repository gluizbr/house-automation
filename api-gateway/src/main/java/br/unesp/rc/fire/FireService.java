package br.unesp.rc.fire;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.fire.FireCentral;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FireService {
  private static final String FIRE_BASE_URL = "http://localhost:8088/fire";

  private final RequestClient requestClient;

  public FireService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  public FireCentral getState() {
    ResponseEntity response = requestClient.getRequest(FIRE_BASE_URL, FireCentral.class);
    return (FireCentral) response.getBody();
  }
}
