package com.simran.taskplan.controller;

import com.simran.taskplan.Entity.User;
import com.simran.taskplan.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully";
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
