package com.flexiboard.hms.controller;

import com.flexiboard.hms.model.User;
import com.flexiboard.hms.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;
    public AuthController(UserRepository userRepository) { this.userRepository = userRepository; }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if(userRepository.findByUsername(user.getUsername()).isPresent()){
            return ResponseEntity.badRequest().body("Username already exists");
        }
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userRepository.findByUsername(user.getUsername())
                .filter(u -> u.getPassword().equals(user.getPassword()))
                .filter(u -> u.getRole().equalsIgnoreCase(user.getRole())) // Add this line!
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).build());
    }
}