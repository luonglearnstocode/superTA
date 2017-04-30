package io.ramenergy.Dao;

import io.ramenergy.Entity.Question;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
public interface QuestionRepository extends CrudRepository<Question, Integer> {
    public List<Question> findByQuizId(int id);
}
