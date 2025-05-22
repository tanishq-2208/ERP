package com.repatikosam.ERP.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TeacherSignupDTO {
    private String teacherId;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String subject;    // Added field
    private String className;  // Added field (using className instead of class as it's a reserved word)
    private String section;    // Added field
}