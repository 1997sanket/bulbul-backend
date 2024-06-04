package com.kamble.bulbul_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class BulbulBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BulbulBackendApplication.class, args);
	}

}
