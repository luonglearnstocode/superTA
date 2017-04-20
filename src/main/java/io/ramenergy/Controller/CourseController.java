package io.ramenergy.Controller;

import io.ramenergy.Entity.Course;
import io.ramenergy.Entity.User;
import io.ramenergy.Service.UserService;
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
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> getCoursesOfUser(@PathVariable String username) {
        return userService.getUser(username).getCourses();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addCourse(@RequestBody Course course, @PathVariable String username) {
        userService.getUser(username).getCourses().add(course);
    }
}
