package com.kamble.bulbul_backend.comment;

import com.kamble.bulbul_backend.post.Post;
import com.kamble.bulbul_backend.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findByPost(Post post);
    List<Comment> findByAuthor(User author);
}

