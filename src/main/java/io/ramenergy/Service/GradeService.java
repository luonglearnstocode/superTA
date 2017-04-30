package io.ramenergy.Service;

import io.ramenergy.Dao.GradeRepository;
import io.ramenergy.Entity.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lwown on 30/4/2017.
 */
@Service
public class GradeService {
    @Autowired
    private GradeRepository gradeRepository;

    public List<Grade> getAllGrades(int quizId) {
        List<Grade> grades = new ArrayList<>();
        gradeRepository.findAll().forEach(grades::add);
        return grades;
    }

    public void addGrade(Grade grade) {
        gradeRepository.save(grade);
    }
}
