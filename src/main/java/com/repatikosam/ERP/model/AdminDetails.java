package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "admin_details")
public class AdminDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    // Change the column name to match your database structure
    @OneToOne
    @JoinColumn(name = "user_id") // Changed from user_id to userid (without underscore)
    private UserEntity user;
}