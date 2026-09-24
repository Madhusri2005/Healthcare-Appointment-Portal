////package com.flexiboard.hms.model;
////
////import jakarta.persistence.*;
////import lombok.Data;
////
////@Entity
////@Table(name = "patient")
////@Data
////public class Patient {
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private Long id;
////
////    private String name;
////    private int age;
////    private String gender;
////    private String phone;
////
////    // ADD THESE TWO LINES
////    private String email;
////    private String address;
////    // Inside Patient.java class
////
////}
//package com.flexiboard.hms.model;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//@Entity
//@Data
//public class Patient {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private int age;
//    private String phone;
//    private String department;
//    private String symptoms;
//    private String priority; // "normal" or "priority"
//    private String status = "Waiting"; // Default status
//}
package com.flexiboard.hms.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer age;
    private String gender;
    private String phone;
    private String email;
    private String address;
    private String department;
    private String symptoms;
    private String type; // "ONLINE" or "WALK-IN"
    private String token;
    private String status; // "Waiting", "Checked-In", "In Consultation", "Completed"
    private LocalDateTime createdAt = LocalDateTime.now();
}