package br.unesp.rc.thief;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.fire.FireCentral;
import br.unesp.rc.model.thief.ThiefCentral;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ThiefService {
  private static final String THIEF_BASE_URL = "http://localhost:8089/thief";

  private final RequestClient requestClient;

  public ThiefService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  public ThiefCentral getState() {
    ResponseEntity response = requestClient.getRequest(THIEF_BASE_URL, ThiefCentral.class);
    return (ThiefCentral) response.getBody();
  }
}
