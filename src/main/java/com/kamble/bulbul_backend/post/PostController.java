package com.kamble.bulbul_backend.post;

import com.kamble.bulbul_backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.findAllPosts();
    }

    @GetMapping("/{id}")
    public Optional<Post> getPostById(@PathVariable String id) {
        return postService.findPostById(id);
    }

    @GetMapping("/author/{username}")
    public List<Post> getPostsByAuthorUsername(@PathVariable String username) {
        System.out.println("Username: " + username);
        return postService.findPostsByAuthorUsername(username);
    }

    @PostMapping("/{userId}")
    public Post createPost(@PathVariable String userId, @RequestBody Post post) {
        System.out.println(userId);
        System.out.println(post);
        return postService.savePost(userId, post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id) {
        postService.deletePost(id);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }
}