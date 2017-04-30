package io.ramenergy.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;

/**
 * Created by lwown on 30/4/2017.
 */
@Entity
public class Grade implements Comparable<Grade>, Serializable {
    @Id
    @GeneratedValue
    private int id;
    private int studentId;
    private int grade;
    @ManyToOne
    @JsonIgnore
    private Quiz quiz;

    public Grade() {}

    public Grade(int id, int studentId, int grade, int quizId) {
        this.id = id;
        this.studentId = studentId;
        this.grade = grade;
        this.quiz = new Quiz(quizId, "", "");
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public int compareTo(Grade o) {
        return this.studentId - o.getStudentId();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }
}
