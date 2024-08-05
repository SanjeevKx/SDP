package com.example.usecase.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.usecase.models.Agent;

public interface AgentRepo extends JpaRepository<Agent, String> {

    List<Agent> findByLocation(String location);

    List<Agent> findByLanguagesContaining(String language);
}
