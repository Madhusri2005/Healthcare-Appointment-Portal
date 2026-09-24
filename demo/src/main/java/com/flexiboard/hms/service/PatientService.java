package com.flexiboard.hms.service;

import com.flexiboard.hms.model.Patient;
import com.flexiboard.hms.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository repository;

    public Patient registerPatient(Patient patient) {
        // Calculate sequence based on department count
        long currentCount = repository.countByDepartment(patient.getDepartment());
        String deptPrefix = patient.getDepartment().substring(0, 3).toUpperCase();

        String generatedToken;
        if ("ONLINE".equalsIgnoreCase(patient.getType())) {
            // Online Appointments: 1, 3, 5...
            generatedToken = deptPrefix + "-" + (currentCount * 2 + 1);
        } else {
            // Receptionist Walk-ins: 2, 4, 6...
            generatedToken = deptPrefix + "-" + (currentCount * 2 + 2);
            patient.setType("WALK-IN");
        }

        patient.setToken(generatedToken);
        patient.setStatus("Waiting"); // Default status for all new entries
        return repository.save(patient);
    }
}