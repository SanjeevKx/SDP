package com.example.realestate.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.realestate.auth.LoginRequest;
import com.example.realestate.auth.RegisterRequest;
import com.example.realestate.auth.LoginResponse;
import com.example.realestate.model.Token;
import com.example.realestate.model.User;
import com.example.realestate.repo.JwtRepo;
import com.example.realestate.repo.UserRepo;
import com.example.realestate.service.AuthService;
import com.example.realestate.config.JwtToken;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;
    private final JwtRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtToken jwtUtil;

    @Override
    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phone(registerRequest.getPhone())
                .address(registerRequest.getAddress())
                .role(User.Role.USER) // Assuming the role is USER by default
                .build();
        userRepository.save(user);
        return "User registered successfully.";
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole().toString());
        var accessToken = jwtUtil.generateToken(extraClaims, user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        return LoginResponse.builder().accessToken(accessToken).build();
    }

    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public String createAdmin() {
        Optional<User> userExist = userRepository.findByEmail("aaa@gmail.com");
        if (userExist.isPresent()) {
            return "Admin already exists";
        }

        var user = User.builder()
                .name("Admin")
                .email("aaa@gmail.com")
                .password(passwordEncoder.encode("aaa"))
                .phone("1234567890")
                .address("xyz")
                .role(User.Role.ADMIN) 
                .build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> updateUserByEmail(String email, User updatedUser) {
        Optional<User> existingUser = userRepository.findByEmail(email);
    
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setName(updatedUser.getName());
            user.setAddress(updatedUser.getAddress());
            user.setPhone(updatedUser.getPhone());
            userRepository.save(user);
            return Optional.of(user);
        }
    
        return Optional.empty();
    }
}
