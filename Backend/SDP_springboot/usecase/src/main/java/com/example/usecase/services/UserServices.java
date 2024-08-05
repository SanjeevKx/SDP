package com.example.usecase.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usecase.models.User;
import com.example.usecase.repos.UserRepo;

@Service
public class UserServices {

    @Autowired
    private UserRepo userRepo;

    public List<User> getUsers() {
        return userRepo.findAll();
    }

    public User addUsers(User user) {
        return userRepo.save(user);
    }

    public String editUser(User user, String uid) {
        Optional<User> optionalUser = userRepo.findById(uid);
        if (optionalUser.isPresent()) {
            user.setUid(uid); // Assuming the User entity has a setUid method
            userRepo.save(user);
            return uid + " Updated ";
        }
        return "User Not Found!";
    }

    public String deleteUser(String uid) {
        Optional<User> optionalUser = userRepo.findById(uid);
        if (optionalUser.isPresent()) {
            userRepo.deleteById(uid);
            return uid + " Deleted";
        }
        return "User Not Found!";
    }

    public Optional<User> getUserById(String id) {
        return userRepo.findById(id);
    }

    public User patchUser(String id, User patchedUser) {
        Optional<User> optionalUser = userRepo.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (patchedUser.getEmail() != null) {
                user.setEmail(patchedUser.getEmail());
            }
            if (patchedUser.getName() != null) {
                user.setName(patchedUser.getName());
            }
            if (patchedUser.getPassword() != null) {
                user.setPassword(patchedUser.getPassword());
            }
            // Add logic for other fields as needed
            return userRepo.save(user);
        }
        throw new IllegalArgumentException("User not found with id: " + id);
    }
}
