
package com.flexiboard.hms.controller;

import com.flexiboard.hms.model.Patient;
import com.flexiboard.hms.repository.PatientRepository;
import com.flexiboard.hms.service.PatientService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

    @Autowired
    private PatientService service;

    @Autowired
    private PatientRepository repository;

    // 1. Save Walk-in or Online Patient
    @PostMapping
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok(service.registerPatient(patient));
    }

    // 2. Get All Patients (Receptionist sees both Online and Walk-in)
    @GetMapping
    public List<Patient> getAll() {
        List<Patient> list = repository.findAllByOrderByCreatedAtAsc();
        // Force a default status if it's null/empty so the Frontend doesn't hide them
        list.forEach(p -> {
            if (p.getStatus() == null || p.getStatus().isEmpty()) {
                p.setStatus("Waiting");
            }
        });
        return list;
    }

    @GetMapping("/report")
    public void downloadReport(HttpServletResponse response) throws IOException, IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=hospital_report.csv");

        List<Patient> patients = repository.findAll();
        PrintWriter writer = response.getWriter();
        writer.println("Token,Name,Age,Type,Department,Status,Time");

        for (Patient p : patients) {
            writer.println(p.getToken() + "," + p.getName() + "," + p.getAge() + "," +
                    p.getType() + "," + p.getDepartment() + "," + p.getStatus() + "," + p.getCreatedAt());
        }
    }
    @PatchMapping("/{token}/status")
    public ResponseEntity<?> updateStatus(@PathVariable String token, @RequestBody String newStatus) {
        // 1. Fetch a LIST instead of a single object to avoid the crash
        List<Patient> patients = repository.findAllByToken(token);

        if (patients.isEmpty()) {
            return ResponseEntity.status(404).body("Patient not found");
        }

        // 2. Take the first one found (the most recent or the oldest)
        Patient patient = patients.get(0);

        String cleanStatus = newStatus.replace("\"", "");
        patient.setStatus(cleanStatus);

        repository.save(patient);
        return ResponseEntity.ok(patient);
    }
}