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
    @Column(name = "student_id")
    private String studentId;
    @Column(name = "password")
    private String password;
    public String getPassword() {
        return password;
    }
    @Column(name = "student_name")
    private String studentName;
    @Column(name = "dob")
    private String dob;
    @Column(name = "parent_name")
    private String parentName;
    @Column(name = "parent_phone")
    private String parentPhone;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity user;

    @Column(name = "class_name")
    private String className;
    
    @Column(name = "section")
    private String section;

}