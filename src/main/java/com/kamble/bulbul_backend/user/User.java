package com.kamble.bulbul_backend.user;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "users")
public class User {

    @Id
    private String userId;

    private String username;

    private String email;

    private String password;

    private List<String> followers;
    private List<String> following;
    private List<String> userRequests;
}
