package io.ramenergy.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

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
    @JsonIgnore
    private Course course;

//    private TreeSet<Grade> grades = new TreeSet<>();


    public Quiz() {
    }

    public Quiz(int id, String title, String courseId) {
        this.id = id;
        this.title = title;
        this.course = new Course(courseId, "", "");
//        this.grades = new ArrayList<>();
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

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

//    public TreeSet<Grade> getGrades() {
//        return grades;
//    }
//
//    public void setGrades(TreeSet<Grade> grades) {
//        this.grades = grades;
//    }


}
