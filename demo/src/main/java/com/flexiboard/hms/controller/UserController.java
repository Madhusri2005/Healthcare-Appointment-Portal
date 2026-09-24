package com.flexiboard.hms.controller;

 // Change this to your actual package name

import com.flexiboard.hms.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    // 1. Inject your Patient Repository
    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/role/{roleName}")
    public List<?> getUsersByRole(@PathVariable String roleName) {
        System.out.println("Fetching users for role: " + roleName);

        // 2. If the request is for PATIENT, return all patients from DB
        if (roleName.equalsIgnoreCase("PATIENT")) {
            return patientRepository.findAll();
        }

        return new ArrayList<>();
    }
}