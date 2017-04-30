package io.ramenergy.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by lwown on 20/4/2017.
 */
@Entity
public class Question {
    @Id
    @GeneratedValue
    private int id;
    private String text;
    private String solution;
    @ManyToOne
    @JsonIgnore
    private Quiz quiz;

    public Question() {
    }

    public Question(int id, String text, String solution, int quizId) {
        this.id = id;
        this.text = text;
        this.solution = solution;
        this.quiz = new Quiz(quizId, "", "");
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

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }
}
