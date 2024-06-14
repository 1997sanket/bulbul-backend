package com.kamble.bulbul_backend.comment;

import com.kamble.bulbul_backend.post.Post;
import com.kamble.bulbul_backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable String id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        return comment.orElse(null);
    }

    @GetMapping("/post/{postId}")
    public List<Comment> getCommentsByPost(@PathVariable String postId) {
        Post post = new Post();
        post.setPostId(postId);
        return commentService.getCommentsByPost(post);
    }

    @GetMapping("/author/{authorId}")
    public List<Comment> getCommentsByAuthor(@PathVariable String authorId) {
        User author = new User();
        author.setUserId(authorId);
        return commentService.getCommentsByAuthor(author);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable String id) {
        commentService.deleteComment(id);
    }

    @PutMapping("/{id}")
    public Comment updateComment(@PathVariable String id, @RequestBody Comment updatedComment) {
        return commentService.updateComment(id, updatedComment);
    }
}

