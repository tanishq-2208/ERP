package com.repatikosam.ERP.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddMarksDTO {
    private Long id;
    private String className;
    private String section;
    private String terminal;
    private String subject;
    private String studentId;
    private String studentName;
    private Integer marks;
    private String teacherId;
    private String teacherName;
}