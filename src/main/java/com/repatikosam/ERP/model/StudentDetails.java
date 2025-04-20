package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "student_details")
public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentId;
    private String studentName;
    private String dob;
    private String parentName;
    private String parentPhone;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;


}