package io.ramenergy.Dao;

import io.ramenergy.Entity.Grade;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
public interface GradeRepository extends CrudRepository<Grade, Integer> {
    public List<Grade> findByQuizId(int id);
}
