package io.ramenergy.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */
@Entity
public class Course {
    @Id
    private String id;
    private String name;
    @ManyToOne
    @JsonIgnore
    private User user;
//    private List<Quiz> quizzes;

    public Course() {
    }

    public Course(String id, String name, String username) {
        this.id = id;
        this.name = name;
        this.user = new User(username, "", "", "", "");
//        this.quizzes = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public List<Quiz> getQuizzes() {
//        return quizzes;
//    }
//
//    public void setQuizzes(List<Quiz> quizzes) {
//        this.quizzes = quizzes;
//    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
