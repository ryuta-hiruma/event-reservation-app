package com.example.event_reservation_app.service;

import com.example.event_reservation_app.entity.User;
import com.example.event_reservation_app.form.UserForm;
import com.example.event_reservation_app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(UserForm form) {
        User user = new User();
        user.setName(form.getName());
        user.setEmail(form.getEmail());
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
