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
    private Long id;

    private String teacherId;
    private String name;
    private String email;
    private String phone;

    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;


}