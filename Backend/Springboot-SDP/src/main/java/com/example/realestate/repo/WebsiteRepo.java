package com.example.realestate.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realestate.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
