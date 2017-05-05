package io.ramenergy.Controller;

import io.ramenergy.Entity.Question;
import io.ramenergy.Entity.Quiz;
import io.ramenergy.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by lwown on 30/4/2017.
 */

@RestController
@RequestMapping("api/users/{username}/courses/{courseId}/quizzes/{quizId}/questions")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Question> getQuestionsOfQuiz(@PathVariable int quizId) {
        return questionService.getAllQuestions(quizId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Question getQuestion(@PathVariable int id) {
        return questionService.getQuestion(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addQuestion(@RequestBody Question question, @PathVariable int quizId) {
        question.setQuiz(new Quiz(quizId, "", ""));
        questionService.addQuestion(question);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void updateQuestion(@RequestBody Question question, @PathVariable int quizId, @PathVariable int id) {
        question.setQuiz(new Quiz(quizId, "", ""));
        questionService.updateQuestion(question);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteQuestion(@PathVariable int id) {
        questionService.deleteQuestion(id);
    }
}
