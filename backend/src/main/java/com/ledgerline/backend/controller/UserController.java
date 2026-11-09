package com.ledgerline.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ledgerline.backend.dto.LoginRequest;
import com.ledgerline.backend.entity.User;
import com.ledgerline.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }
    @PostMapping("/login")
public String login(@RequestBody LoginRequest loginRequest) {
    return userService.loginUser(loginRequest);
    }
    @GetMapping("/test")
public String test() {
    return "User Controller is Working!";
    }
    @PostMapping("/logout")
public String logout() {
    return userService.logoutUser();
    }
}