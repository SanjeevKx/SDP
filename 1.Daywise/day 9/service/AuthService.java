package com.example.realestate.service;

import com.example.realestate.auth.LoginRequest;
import com.example.realestate.auth.RegisterRequest;
import com.example.realestate.auth.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}
