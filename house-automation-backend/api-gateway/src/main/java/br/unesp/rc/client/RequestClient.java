package br.unesp.rc.client;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Service
public class RequestClient {

  private RestTemplate restTemplate;

  public RequestClient(RestTemplate restTemplate) {
    this.restTemplate = restTemplate;
  }

  public ResponseEntity getRequest(String url) {
    return doRequest(url, HttpMethod.GET, null, String.class);
  }

  public ResponseEntity getRequest(String url, HttpHeaders parameters) {
    return doRequest(url, HttpMethod.GET, parameters, String.class);
  }

  public ResponseEntity getRequest(String url, Class returnType) {
    return doRequest(url, HttpMethod.GET, null, returnType);
  }

  public ResponseEntity getRequest(String url, HttpHeaders parameters, Class returnType) {
    return doRequest(url, HttpMethod.GET, parameters, returnType);
  }

  public ResponseEntity postRequest(String url, Object body) {
    return doRequestWithBody(url, HttpMethod.POST, null, body, String.class);
  }

  public ResponseEntity postRequest(String url, Object body, HttpHeaders parameters) {
    return doRequestWithBody(url, HttpMethod.POST, parameters, body, String.class);
  }

  public ResponseEntity postRequest(URI uri, HttpHeaders parameters) {
    return doRequestWithBody(uri, HttpMethod.POST, parameters, null, String.class);
  }

  public ResponseEntity postRequest(String url, Object body, Class returnType) {
    return doRequestWithBody(url, HttpMethod.POST, null, body, returnType);
  }

  public ResponseEntity postRequest(String url, Object body, HttpHeaders parameters,
      Class returnType) {
    return doRequestWithBody(url, HttpMethod.POST, parameters, body, returnType);
  }

  public ResponseEntity putRequest(String url, Object body) {
    return doRequestWithBody(url, HttpMethod.PUT, null, body, String.class);
  }

  public ResponseEntity putRequest(String url, Object body, HttpHeaders headers) {
    return doRequestWithBody(url, HttpMethod.PUT, headers, body, String.class);
  }

  public ResponseEntity putRequest(String url, Object body, Class returnType) {
    return doRequestWithBody(url, HttpMethod.PUT, null, body, returnType);
  }

  public ResponseEntity putRequest(String url, Object body, HttpHeaders parameters,
      Class returnType) {
    return doRequestWithBody(url, HttpMethod.PUT, parameters, body, returnType);
  }

  public ResponseEntity deleteRequest(String url) {
    return doRequest(url, HttpMethod.DELETE, null, String.class);
  }

  public ResponseEntity deleteRequest(String url, HttpHeaders parameters) {
    return doRequest(url, HttpMethod.DELETE, parameters, String.class);
  }

  private ResponseEntity doRequest(String url, HttpMethod httpMethod, HttpHeaders headers,
      Class classType) {
    HttpEntity httpEntity = new HttpEntity(headers);
    return restTemplate.exchange(url, httpMethod, httpEntity, classType);
  }

  private ResponseEntity doRequestWithBody(String url, HttpMethod httpMethod, HttpHeaders headers,
      Object body, Class classType) {
    HttpEntity httpEntity = new HttpEntity(body, headers);
    return restTemplate.exchange(url, httpMethod, httpEntity, classType);
  }

  private ResponseEntity doRequestWithBody(URI uri, HttpMethod httpMethod, HttpHeaders headers,
      Object body, Class classType) {
    HttpEntity httpEntity = new HttpEntity(body, headers);
    return restTemplate.exchange(uri, httpMethod, httpEntity, classType);
  }
}
