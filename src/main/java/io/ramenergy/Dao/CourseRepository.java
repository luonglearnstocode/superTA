package io.ramenergy.Dao;

import io.ramenergy.Entity.Course;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by lwown on 23/4/2017.
 */
public interface CourseRepository extends CrudRepository<Course, String> {
    public List<Course> findByUserUsername(String username);
}
