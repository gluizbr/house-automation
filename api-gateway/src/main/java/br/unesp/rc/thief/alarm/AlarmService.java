package br.unesp.rc.thief.alarm;

import br.unesp.rc.client.RequestClient;
import br.unesp.rc.model.thief.Alarm;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AlarmService {

  private static final String THIEF_BASE_URL = "http://localhost:8089/thief";
  private static final String ALARM_ENDPOINT = "/alarm";

  private final RequestClient requestClient;

  public AlarmService(RequestClient requestClient) {
    this.requestClient = requestClient;
  }

  private String buildAlarmUrl() {
    return THIEF_BASE_URL + ALARM_ENDPOINT;
  }

  public Alarm active() {
    ResponseEntity response = requestClient.putRequest(buildAlarmUrl() + "/activate", null, Alarm.class);
    return (Alarm) response.getBody();
  }

  public Alarm deactivate() {
    ResponseEntity response = requestClient.putRequest(buildAlarmUrl() + "/deactivate", null, Alarm.class);
    return (Alarm) response.getBody();
  }
}
