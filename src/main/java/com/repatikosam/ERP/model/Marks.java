package com.repatikosam.ERP.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "marks_details")
@Getter
@Setter
public class Marks {
    @Id
    
    
    @Column(name = "class_name")
    private String className;
    
    @Column(name = "section")
    private String section;
    
    @Column(name = "terminal")
    private String terminal;
    
    @Column(name = "subject")
    private String subject;
    
    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private StudentDetails student;
    
    @Column(name = "student_name")
    private String studentName;
    
    @Column(name = "marks")
    private Integer marks;
    
    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "user_id")
    private UserEntity teacher;
    
    @Column(name = "name")
    private String teacherName;
}