package io.ramenergy.Entity;

/**
 * Created by lwown on 20/4/2017.
 */
public class Question {
    private String id;
    private String text;
    private String solution;

    public Question() {
    }

    public Question(String id, String text, String solution) {
        this.id = id;
        this.text = text;
        this.solution = solution;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }
}
