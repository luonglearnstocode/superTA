package io.ramenergy.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by lwown on 20/4/2017.
 */
//@Entity
public class Question {
//    @Id
//    @GeneratedValue
    private int id;
    private String text;
    private String solution;

    public Question() {
    }

    public Question(int id, String text, String solution) {
        this.id = id;
        this.text = text;
        this.solution = solution;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
