package com.etz.etzwallet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class EtzwalletApplication {

	public static void main(String[] args) {
		SpringApplication.run(EtzwalletApplication.class, args);
	}
}
