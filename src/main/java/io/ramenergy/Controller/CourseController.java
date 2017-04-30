package io.ramenergy.Controller;

import io.ramenergy.Entity.Course;
import io.ramenergy.Entity.User;
import io.ramenergy.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */
@RestController
@RequestMapping("/users/{username}/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> getCoursesOfUser(@PathVariable String username) {
        return courseService.getAllCourses(username);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Course getCourse(@PathVariable String id) {
        return courseService.getCourse(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addCourse(@RequestBody Course course, @PathVariable String username) {
        course.setUser(new User(username, "", "", "", ""));
        courseService.addCourse(course);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public void updateUser(@RequestBody Course course, @PathVariable String username, @PathVariable String id) {
        course.setUser(new User(username, "", "", "", ""));
        courseService.updateCourse(course);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void deleteUser(@PathVariable String id) {
        courseService.deleteCourse(id);
    }

}
