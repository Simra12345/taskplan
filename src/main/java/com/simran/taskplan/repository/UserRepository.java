package com.simran.taskplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simran.taskplan.Entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
