package com.simran.taskplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simran.taskplan.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
