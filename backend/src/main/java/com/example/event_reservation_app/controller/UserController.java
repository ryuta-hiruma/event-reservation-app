package com.example.event_reservation_app.controller;

import com.example.event_reservation_app.entity.User;
import com.example.event_reservation_app.form.UserForm;
import com.example.event_reservation_app.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    // ユーザー登録（POST）
    @PostMapping
    public User createUser(@RequestBody @Valid UserForm form) {
        return userService.createUser(form);
    }

    // ユーザー一覧取得（GET）
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
