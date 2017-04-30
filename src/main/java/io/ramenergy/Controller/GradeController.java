package io.ramenergy.Controller;

import io.ramenergy.Entity.Grade;
import io.ramenergy.Service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
@RestController
@RequestMapping("/users/{username}/courses/{courseId}/quizzes/{id}/grades")
public class GradeController {
    @Autowired
    private GradeService gradeService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Grade> getGrades(@PathVariable int id) {
        return gradeService.getAllGrades(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addGrade(@PathVariable int id, @RequestBody Grade grade) {
        gradeService.addGrade(grade);
    }
}
