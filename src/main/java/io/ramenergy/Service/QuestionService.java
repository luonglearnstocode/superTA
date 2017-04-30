package io.ramenergy.Service;

import io.ramenergy.Dao.QuestionRepository;
import io.ramenergy.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getAllQuestions(int quizId) {
        List<Question> questions = new ArrayList<>();
        questionRepository.findByQuizId(quizId).forEach(questions::add);
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
}
