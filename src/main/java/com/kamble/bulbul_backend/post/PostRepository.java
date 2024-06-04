package com.kamble.bulbul_backend.post;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByAuthorUsername(String username);
}