package io.ramenergy.Service;

import io.ramenergy.Dao.UserRepository;
import io.ramenergy.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by lwown on 20/4/2017.
 */

@Service
public class UserService {
    private List<User> users = new ArrayList<>(Arrays.asList(
            new User("a", "b", "ab", "a@b.com", "secret"),
            new User("c", "d", "cd", "c@d.com", "secret"),
            new User("e", "f", "ef", "e@f.com", "secret"),
            new User("g", "h", "gh", "g@h.com", "secret"),
            new User("h", "i", "hi", "i@h.com", "secret2"),
            new User("i", "k", "ki", "i@i.com", "secret5jes")
    ));

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User getUser(String username) {
        return userRepository.findOne(username);
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(String username, User user) {
        userRepository.save(user);
    }
//
    public void deleteUser(String username) {
        userRepository.delete(username);
    }
}
