package io.ramenergy.Entity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */
public class Quiz {
    private String id;
    private String title;
    private List<Question> questions;

    public Quiz() {
    }

    public Quiz(String id, String title) {
        this.id = id;
        this.title = title;
        this.questions = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
