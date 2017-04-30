package io.ramenergy.Service;

import io.ramenergy.Dao.QuizRepository;
import io.ramenergy.Entity.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public List<Quiz> getAllQuizzes(String courseId) {
        List<Quiz> quizzes = new ArrayList<>();
        quizRepository.findByCourseId(courseId).forEach(quizzes::add);
        return quizzes;
    }

    public Quiz getQuiz(int id) {
        return quizRepository.findOne(id);
    }

    public void addQuiz(Quiz quiz) {
        quizRepository.save(quiz);
    }

    public void updateQuiz(Quiz quiz) {
        quizRepository.save(quiz);
    }

    public void deleteQuiz(int id) {
        quizRepository.delete(id);
    }

}
