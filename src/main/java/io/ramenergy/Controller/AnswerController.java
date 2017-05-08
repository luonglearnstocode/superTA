package io.ramenergy.Controller;

import io.ramenergy.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */

@RestController
@RequestMapping("api/public/{quizId}/answer")
public class AnswerController {
    @Autowired
    private QuestionService questionService;

    @RequestMapping(method = RequestMethod.GET)
    public List<String> getQuestionsOfQuizWithoutSolution(@PathVariable int quizId) {
        return questionService.getAllQuestionsWithoutSolution(quizId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Boolean> answerQuestions(@PathVariable int quizId, @RequestBody List<String> answers, @RequestParam("student") int studentId) {
        return questionService.answerQuestions(quizId, answers, studentId);
    }
}
