package com.kamble.bulbul_backend.post;

import com.kamble.bulbul_backend.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByUser(User user);

}