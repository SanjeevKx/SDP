package com.example.usecase.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.usecase.models.Agent;
import com.example.usecase.services.AgentService;

@RestController
// @CrossOrigin("http://localhost:5173")
@RequestMapping("/api/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @GetMapping("/login")
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @GetMapping("/{id}")
    public Optional<Agent> getAgentById(@PathVariable String id) {
        return agentService.getAgentById(id);
    }

    @PostMapping("/register")
    public Agent addAgent(@RequestBody Agent agent) {
        return agentService.addAgent(agent);
    }

    @PutMapping("/{id}")
    public Agent updateAgent(@PathVariable String id, @RequestBody Agent agentDetails) {
        return agentService.updateAgent(id, agentDetails);
    }

    @DeleteMapping("/{id}")
    public String deleteAgent(@PathVariable String id) {
        return agentService.deleteAgent(id);
    }

    @GetMapping("/location/{location}")
    public List<Agent> getAgentsByLocation(@PathVariable String location) {
        return agentService.getAgentsByLocation(location);
    }

    @GetMapping("/language/{language}")
    public List<Agent> getAgentsByLanguage(@PathVariable String language) {
        return agentService.getAgentsByLanguage(language);
    }
}
