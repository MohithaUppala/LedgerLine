package com.ledgerline.backend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ledgerline.backend.dto.LoginRequest;
import com.ledgerline.backend.entity.User;
import com.ledgerline.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {
        return userRepository.save(user);
    }
    public String loginUser(LoginRequest loginRequest) {

    Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

    if (user.isPresent()) {

        if (user.get().getPassword().equals(loginRequest.getPassword())) {
            return "Login Successful";
        }

    }

    return "Invalid Email or Password";
}
public String logoutUser() {
    return "Logout Successful";
}
}