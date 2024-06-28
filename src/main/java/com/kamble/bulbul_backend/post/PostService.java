package com.kamble.bulbul_backend.post;

import com.kamble.bulbul_backend.user.User;
import com.kamble.bulbul_backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(String id) {
        return postRepository.findById(id);
    }

    public List<Post> findPostsByAuthorUsername(String username) {
        User user = userRepository.findByUsername(username);

        if(user != null)
            return postRepository.findByUser(user);

        return Collections.EMPTY_LIST;
    }

    public Post savePost(String userId, Post post) {
        User user = userRepository.findByUsername(userId);
        if (user != null) {
            post.setUser(user);
            return postRepository.save(post);
        }
        throw new RuntimeException("User not found");
    }

    public Post updatePost(String postId, Post updatedPost) {
        Optional<Post> existingPostOpt = postRepository.findById(postId);
        if (existingPostOpt.isPresent()) {
            Post existingPost = existingPostOpt.get();
            existingPost.setContent(updatedPost.getContent());
            return postRepository.save(existingPost);
        }
        throw new RuntimeException("Post not found");
    }

    public void deletePost(String id) {
        postRepository.deleteById(id);
    }
}