package io.ramenergy.Controller;

import io.ramenergy.Entity.Course;
import io.ramenergy.Entity.Quiz;
import io.ramenergy.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
@RestController
@RequestMapping("/users/{username}/courses/{courseId}/quizzes")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Quiz> getQuizzesOfCourse(@PathVariable String courseId) {
        return quizService.getAllQuizzes(courseId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Quiz getQuiz(@PathVariable int id) {
        return quizService.getQuiz(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addQuiz(@RequestBody Quiz quiz, @PathVariable String courseId) {
        quiz.setCourse(new Course(courseId, "", ""));
        quizService.addQuiz(quiz);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void updateQuiz(@RequestBody Quiz quiz, @PathVariable String courseId, @PathVariable int id) {
        quiz.setCourse(new Course(courseId, "", ""));
        quizService.updateQuiz(quiz);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteQuiz(@PathVariable int id) {
        quizService.deleteQuiz(id);
    }

}
