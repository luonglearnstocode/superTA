package io.ramenergy.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */
@Entity
public class Quiz {
    @Id
    @GeneratedValue
    private int id;
    private String title;
    @ManyToOne
    private Course course;
//    private List<Question> questions;

    public Quiz() {
    }

    public Quiz(int id, String title, String courseId) {
        this.id = id;
        this.title = title;
        this.course = new Course(courseId, "", "");
//        this.questions = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public List<Question> getQuestions() {
//        return questions;
//    }
//
//    public void setQuestions(List<Question> questions) {
//        this.questions = questions;
//    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
