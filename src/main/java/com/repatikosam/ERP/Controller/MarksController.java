package com.repatikosam.ERP.Controller;

import com.repatikosam.ERP.Service.MarksService;
import com.repatikosam.ERP.dto.StudentSignupDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class MarksController {

    @Autowired
    private MarksService MarksService;

    @GetMapping("/api/students/{className}/{section}")
    @ResponseBody
    public Map<String, Object> getStudentsByClassAndSection(
            @PathVariable String className,
            @PathVariable String section) {
        
        System.out.println("Fetching students for class: " + className + ", section: " + section);
        
        List<StudentSignupDTO> students = MarksService.getStudentsByClassAndSection(className, section);
        System.out.println("Found students: " + students.size());
        
        List<Map<String, Object>> studentList = students.stream()
            .map(student -> {
                Map<String, Object> studentMap = new HashMap<>();
                studentMap.put("studentId", student.getStudentId());
                studentMap.put("studentName", student.getStudentName());
                System.out.println("Mapping student: " + student.getStudentId() + " - " + student.getStudentName());
                return studentMap;
            })
            .collect(Collectors.toList());

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("students", studentList);
        return response;
    }

    @PostMapping(value = "/api/marks", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Map<String, Object> saveMarks(@RequestBody Map<String, Object> marksData) {
        System.out.println("Received marks data: " + marksData);
        
        // TODO: Add marks saving logic here
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Marks saved successfully");
        return response;
    }
}