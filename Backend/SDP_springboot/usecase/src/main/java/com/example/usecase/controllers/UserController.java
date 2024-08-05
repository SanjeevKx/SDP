package com.example.usecase.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.usecase.models.User;
import com.example.usecase.services.UserServices;

@RestController
// @CrossOrigin("http://localhost:5173")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServices userService;

    @GetMapping("/login")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @PostMapping("/register")
    public User addUser(@RequestBody User user) {
        return userService.addUsers(user);
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return user;
        } else {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
    }

    @PutMapping("/update/{uid}")
    public String updateUser(@RequestBody User user, @PathVariable String uid) {
        return userService.editUser(user, uid);
    }

    @PatchMapping("/patch/{id}")
    public User patchUser(@PathVariable String id, @RequestBody User patchedUser) {
        return userService.patchUser(id, patchedUser);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable String uid) {
        return userService.deleteUser(uid);
    }
}
