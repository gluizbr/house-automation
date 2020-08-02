package br.unesp.rc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@EnableAsync
@SpringBootApplication
public class ApiGateway
{
    public static void main(String[] args) {
        new SpringApplication(ApiGateway.class).run(args);
    }
}
