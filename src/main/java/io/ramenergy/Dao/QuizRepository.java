package io.ramenergy.Dao;

import io.ramenergy.Entity.Quiz;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
public interface QuizRepository extends CrudRepository<Quiz, Integer> {
    public List<Quiz> findByCourseId(String id);
}
