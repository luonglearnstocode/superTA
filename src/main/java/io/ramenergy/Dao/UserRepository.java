package io.ramenergy.Dao;

import io.ramenergy.Entity.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by lwown on 23/4/2017.
 */
public interface UserRepository extends CrudRepository<User, String> {

}
