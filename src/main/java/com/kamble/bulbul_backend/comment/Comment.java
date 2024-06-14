package com.kamble.bulbul_backend.comment;

import com.kamble.bulbul_backend.post.Post;
import com.kamble.bulbul_backend.user.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "comments")
public class Comment {

    @Id
    private String commentId;

    private String content;

    @DBRef
    private User author;

    @DBRef
    private Post post;
}
