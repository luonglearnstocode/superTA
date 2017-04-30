package io.ramenergy.Service;

import io.ramenergy.Dao.QuestionRepository;
import io.ramenergy.Dao.QuizRepository;
import io.ramenergy.Entity.Grade;
import io.ramenergy.Entity.Question;
import io.ramenergy.Entity.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by lwown on 30/4/2017.
 */
@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private GradeService gradeService;

    public List<Question> getAllQuestions(int quizId) {
        List<Question> questions = new ArrayList<>();
        questionRepository.findByQuizId(quizId).forEach(questions::add);
        return questions;
    }

    public List<String> getAllQuestionsWithoutSolution(int quizId) {
        List<String> questions = new ArrayList<>();
        questionRepository.findByQuizId(quizId).forEach(q -> questions.add(q.getText()));
        return questions;
    }

    public Question getQuestion(int id) {
        return questionRepository.findOne(id);
    }

    public void addQuestion(Question question) {
        questionRepository.save(question);
    }

    public void updateQuestion(Question question) {
        questionRepository.save(question);
    }

    public void deleteQuestion(int id) {
        questionRepository.delete(id);
    }

    public List<Boolean> answerQuestions(int quizId, List<String> answers, int studentId) {
        List<Boolean> check = new ArrayList<>();
        List<String> solutions = new ArrayList<>();
        questionRepository.findByQuizId(quizId).forEach(q -> solutions.add(q.getSolution()));
        for (int i = 0; i < answers.size(); i++) {
            check.add(solutions.get(i).equals(answers.get(i)));
        }

        long score = check.stream().filter(p -> p == true).count();
        Grade grade = new Grade();
        grade.setStudentId(studentId);
        grade.setGrade((int) score);
        gradeService.addGrade(grade);

        return check;
    }
}
