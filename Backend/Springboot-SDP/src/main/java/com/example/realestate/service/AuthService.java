package com.example.realestate.service;

import com.example.realestate.auth.LoginRequest;
import com.example.realestate.auth.RegisterRequest;
import com.example.realestate.auth.LoginResponse;

import java.util.List;
import java.util.Optional;

import com.example.realestate.model.User;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();

    List<User> getAllUsers();

    Optional<User> getUserByEmail(String email);

    Optional<User> updateUserByEmail(String email, User updatedUser);
}
