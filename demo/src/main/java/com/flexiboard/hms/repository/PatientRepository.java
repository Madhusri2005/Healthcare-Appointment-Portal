package com.flexiboard.hms.repository;

import com.flexiboard.hms.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    // Find by the generated token string (e.g., "GEN-2")
    Optional<Patient> findByToken(String token);
    // Change findByToken to return a List
    List<Patient> findAllByToken(String token);
    // Count patients in a specific department to calculate next Odd/Even number
    long countByDepartment(String department);

    // Get all patients sorted by arrival time for the Queue Management table
    List<Patient> findAllByOrderByCreatedAtAsc();
}