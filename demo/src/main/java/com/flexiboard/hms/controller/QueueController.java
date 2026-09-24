package com.flexiboard.hms.controller;

import com.flexiboard.hms.model.Token;
import com.flexiboard.hms.model.Patient;
import com.flexiboard.hms.repository.TokenRepository;
import com.flexiboard.hms.repository.PatientRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/queue")
@CrossOrigin(origins = "http://localhost:5173")
public class QueueController {

    private final TokenRepository tokenRepository;
    private final PatientRepository patientRepository;

    public QueueController(TokenRepository tokenRepository, PatientRepository patientRepository) {
        this.tokenRepository = tokenRepository;
        this.patientRepository = patientRepository;
    }

    @GetMapping("/live")
    public List<Map<String, Object>> getLiveQueue() {
        return tokenRepository.findAll().stream()
                .filter(t -> "WAITING".equals(t.getStatus()))
                .sorted(Comparator.comparingInt(t -> Integer.parseInt(t.getTokenNumber().split("-")[1])))
                .map(t -> {
                    Map<String, Object> data = new HashMap<>();
                    Patient p = patientRepository.findById(t.getPatientId()).orElse(null);
                    data.put("token", t.getTokenNumber());
                    data.put("name", p != null ? p.getName() : "Unknown");
                    data.put("type", t.getType());
                    return data;
                })
                .collect(Collectors.toList());
    }
}