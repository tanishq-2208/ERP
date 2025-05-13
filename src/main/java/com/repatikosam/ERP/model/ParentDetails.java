package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "parent_details")
public class ParentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    // Change from @JoinColumn to @Column for studentId
    @Column(name = "student_id")
    private String studentId;

    @Column(name = "child_name")
    private String childName;

    @Column(name = "parent_no")
    private String parentNo;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")

    private UserEntity user;
}