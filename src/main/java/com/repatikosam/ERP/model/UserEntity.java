package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import com.repatikosam.ERP.auth.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id") // Map to the database column name
    private String userId; // Changed from user_id to userId to follow Java conventions
    
    private String password;

    public String getPassword() {
        return password;
    }
    private boolean enabled = true;

    @Enumerated(EnumType.STRING)
    private Role role;
}