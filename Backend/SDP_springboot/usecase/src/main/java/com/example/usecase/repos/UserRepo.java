package com.example.usecase.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.usecase.models.User;

public interface UserRepo extends JpaRepository<User, String> {
    

}
