//package com.flexiboard.hms.model;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import java.time.LocalDateTime;
//
//@Entity
//@Data
//public class Token {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String tokenNumber; // Changed to String to support "T-1", "T-2"
//    private Long patientId;     // Added this
//    private String type;        // Added this ("ONLINE" or "WALK-IN")
//    private String status;      // "WAITING", "CALLED", "COMPLETED"
//    private String department;  // Added for department-wise filtering
//    private LocalDateTime createdAt = LocalDateTime.now();

//}

package com.flexiboard.hms.model;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tokenNumber; // e.g., "CAR-1", "NEU-3"
    private Long patientId;
    private String type = "ONLINE";
    private String department;
    private String status = "WAITING";
    private LocalDateTime createdAt = LocalDateTime.now();
}