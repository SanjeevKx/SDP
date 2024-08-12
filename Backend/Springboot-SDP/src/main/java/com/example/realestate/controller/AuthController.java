package com.example.realestate.controller;

import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.realestate.auth.LoginRequest;
import com.example.realestate.auth.RegisterRequest;
import com.example.realestate.auth.LoginResponse;
import com.example.realestate.model.User;
import com.example.realestate.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<String> register(@Parameter(description = "Registration details of the user") @RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(authService.register(registerRequest), OK);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    public ResponseEntity<LoginResponse> login(@Parameter(description = "Login credentials of the user") @RequestBody LoginRequest loginRequest) {
        return new ResponseEntity<>(authService.login(loginRequest), OK);
    }

    @GetMapping("/users")
    @Operation(summary = "Get all users", description = "Fetches a list of all registered users.")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(authService.getAllUsers(), OK);
    }

    @GetMapping("/user/{email}")
    @Operation(summary = "Get user by email", description = "Fetches a user by their email address.")
    public ResponseEntity<Optional<User>> getUserByEmail(@PathVariable String email) {
        return new ResponseEntity<>(authService.getUserByEmail(email), OK);
    }

    @PutMapping("/user/{email}")
    @Operation(summary = "Update user by email", description = "Updates the details of a user specified by their email.")
    public ResponseEntity<Optional<User>> updateUserByEmail(@PathVariable String email, @RequestBody User updatedUser) {
        return new ResponseEntity<>(authService.updateUserByEmail(email, updatedUser), OK);
    }
}
