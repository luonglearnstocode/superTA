package io.ramenergy.Service;

import io.ramenergy.Dao.UserDao;
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
    @Autowired
    private UserDao userDao;

    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    public User getUser(String username) {
        return userDao.getUser(username);
    }

    public void addUser(User user) {
        userDao.addUser(user);
    }

    public void updateUser(String username, User user) {
        userDao.updateUser(username, user);
    }

    public void deleteUser(String username) {
        userDao.deleteUser(username);
    }
}
