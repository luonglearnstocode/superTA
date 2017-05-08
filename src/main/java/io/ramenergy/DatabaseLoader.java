package io.ramenergy;

import io.ramenergy.Dao.CourseRepository;
import io.ramenergy.Dao.QuestionRepository;
import io.ramenergy.Dao.QuizRepository;
import io.ramenergy.Dao.UserRepository;
import io.ramenergy.Entity.Course;
import io.ramenergy.Entity.Question;
import io.ramenergy.Entity.Quiz;
import io.ramenergy.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository, CourseRepository courseRepository, QuizRepository quizRepository, QuestionRepository questionRepository ) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
        this.quizRepository = quizRepository;
        this.questionRepository = questionRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.userRepository.save(new User("ramen", "Jesse", "Nguyen", "jesse.nguyen@metropolia.fi", "secret"));

        Course course = new Course();
        course.setId("prob101");
        course.setName("Probability 101");
        course.setUser(new User("ramen", "", "", "", ""));
        this.courseRepository.save(course);

        Quiz quiz = new Quiz();
        quiz.setTitle("Week 1 - Techniques of counting & Introduction to Probability");
        quiz.setCourse(new Course("prob101", "", ""));
        this.quizRepository.save(quiz);

        Question question11 = new Question();
        question11.setText("Suppose a bookcase shelf has 5 History texts, 3 Sociology texts, 6 Anthropology texts, and 4 Psychology texts. Find the number n of ways a student can choose one of the texts?");
        question11.setSolution("18");
        question11.setQuiz(new Quiz(1, "", ""));
        this.questionRepository.save(question11);


        Question question12 = new Question();
        question12.setText("A history class contains m male students and f female students. Find the number n of ways that the class can elect 1 president and 1 vice president? ");
        question12.setSolution("(m + f) * (m + f - 1)");
        question12.setQuiz(new Quiz(1, "", ""));
        this.questionRepository.save(question12);

        Question question13 = new Question();
        question13.setText("A student answers randomly on an multiple choice questions exam. The exam has 10 questions. Each question has 1 correct answer out of 4 choices. What is the probability that the student answer correctly all the questions?");
        question13.setSolution("0.25^10");
        question13.setQuiz(new Quiz(1, "", ""));
        this.questionRepository.save(question13);

        Question question14 = new Question();
        question14.setText("A single card is drawn from an ordinary deck of 52 cards. Find the probability p that the card is a face card and a heart.  ");
        question14.setSolution("0.0576923");
        question14.setQuiz(new Quiz(1, "", ""));
        this.questionRepository.save(question14);

        Question question15 = new Question();
        question15.setText("The probability that A hits a target is $p_a$ (pa) and the probability that B hits a target is $p_b$ (pb). They both fire at the target. Find the probability that both hit the target?");
        question15.setSolution("pa * pb");
        question15.setQuiz(new Quiz(1, "", ""));
        this.questionRepository.save(question15);


        Quiz quiz2 = new Quiz();
        quiz2.setTitle("Week 2 - Advanced techniques of counting");
        quiz2.setCourse(new Course("prob101", "", ""));
        this.quizRepository.save(quiz2);

        Question question21 = new Question();
        question21.setText("a");
        question21.setSolution("a");
        question21.setQuiz(new Quiz(2, "", ""));
        this.questionRepository.save(question21);

        Question question22 = new Question();
        question22.setText("b");
        question22.setSolution("b");
        question22.setQuiz(new Quiz(2, "", ""));
        this.questionRepository.save(question22);

    }
}
