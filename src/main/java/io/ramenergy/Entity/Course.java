package io.ramenergy.Entity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */
public class Course {
    private String id;
    private String name;
    private List<Quiz> quizzes;

    public Course() {
    }

    public Course(String id, String name) {
        this.id = id;
        this.name = name;
        this.quizzes = new ArrayList<>();
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

    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
}
