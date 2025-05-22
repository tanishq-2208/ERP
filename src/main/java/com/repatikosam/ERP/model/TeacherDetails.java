package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "teacher_details")
public class TeacherDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "teacher_id")
    private String teacherId;

    @Column(name = "password")
    private String password;
    public String getPassword() {
        return password;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "subject")    // Added field
    private String subject;

    @Column(name = "class_name") // Added field (using class_name in DB)
    private String className;

    @Column(name = "section")    // Added field
    private String section;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity user;
}
