package com.flexiboard.hms.controller;

import com.flexiboard.hms.model.Patient;
import com.flexiboard.hms.model.Token;
import com.flexiboard.hms.repository.PatientRepository;
import com.flexiboard.hms.repository.TokenRepository;
import com.flexiboard.hms.service.TokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/online")
@CrossOrigin(origins = "http://localhost:5173") // Allow React Access
public class OnlineBookingController {

    private final PatientRepository patientRepository;
    private final TokenRepository tokenRepository;
    private final TokenService tokenService;

    public OnlineBookingController(PatientRepository pr, TokenRepository tr, TokenService ts) {
        this.patientRepository = pr;
        this.tokenRepository = tr;
        this.tokenService = ts;
    }

    @PostMapping("/book")
    public ResponseEntity<Map<String, Object>> bookAppointment(@RequestBody Patient patient) {
        // 1. Save the Patient details
        Patient savedPatient = patientRepository.save(patient);

        // 2. Generate the Odd Token
        String tokenNumber = tokenService.generateOddToken(patient.getDepartment());

        // 3. Save the Token record
        Token token = new Token();
        token.setPatientId(savedPatient.getId());
        token.setTokenNumber(tokenNumber);
        token.setDepartment(patient.getDepartment());
        tokenRepository.save(token);

        // 4. Return combined data for React
        Map<String, Object> response = new HashMap<>();
        response.put("token", tokenNumber);
        response.put("queuePosition", (tokenRepository.countByDepartment(patient.getDepartment())));
        response.put("patient", savedPatient);

        return ResponseEntity.ok(response);
    }
}