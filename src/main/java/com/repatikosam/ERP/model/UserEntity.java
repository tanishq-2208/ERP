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

    private String user_id; // Custom ID like T123, S001
    private String password;
    private boolean enabled = true;

    @Enumerated(EnumType.STRING)
    private Role role;


}