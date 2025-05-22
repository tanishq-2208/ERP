package com.repatikosam.ERP.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StudentSignupDTO {
    private String studentId;
    private String studentName;
    private String dob;
    private String parentName;
    private String parentPhone;
    private String password;
    private String className;    // Added field
    private String section;      // Added field
}