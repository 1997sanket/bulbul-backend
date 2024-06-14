package com.kamble.bulbul_backend.comment;

import com.kamble.bulbul_backend.post.Post;
import com.kamble.bulbul_backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Optional<Comment> getCommentById(String commentId) {
        return commentRepository.findById(commentId);
    }

    public List<Comment> getCommentsByPost(Post post) {
        return commentRepository.findByPost(post);
    }

    public List<Comment> getCommentsByAuthor(User author) {
        return commentRepository.findByAuthor(author);
    }

    public Comment updateComment(String commentId, Comment updatedComment) {
        return commentRepository.findById(commentId).map(comment -> {
            comment.setContent(updatedComment.getContent());
            comment.setAuthor(updatedComment.getAuthor());
            comment.setPost(updatedComment.getPost());
            return commentRepository.save(comment);
        }).orElseGet(() -> {
            updatedComment.setCommentId(commentId);
            return commentRepository.save(updatedComment);
        });
    }

    public void deleteComment(String commentId) {
        commentRepository.deleteById(commentId);
    }
}
