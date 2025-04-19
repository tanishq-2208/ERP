package com.repatikosam.ERP.Controller;

import com.repatikosam.ERP.auth.entity.AdminSignupDTO;
import com.repatikosam.ERP.auth.entity.TeacherSignupDTO;
import com.repatikosam.ERP.auth.entity.StudentSignupDTO;
import com.repatikosam.ERP.Service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@Controller
public class SignupController {

    @Autowired
    private SignupService signupService;

    @GetMapping("/signup/admin")
    public String showAdminSignupForm(Model model) {
        model.addAttribute("adminDto", new AdminSignupDTO());
        return "admin_signup";
    }

    // In your processAdminSignup method, add logging
    @PostMapping("/signup/admin")
    public String processAdminSignup(@ModelAttribute AdminSignupDTO adminDto, Model model) {
        System.out.println("Received admin signup request: " + adminDto);
        boolean success = signupService.registerAdmin(adminDto);
        model.addAttribute("message", success ? "Admin signup successful!" : "Signup failed. Try again.");
        return "admin_signup";
    }
    
    // Add a REST endpoint for handling JSON requests from React
    @PostMapping(value = "/signup/admin", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Map<String, Object> processAdminSignupJson(@RequestBody AdminSignupDTO adminDto) {
        System.out.println("Received admin signup JSON request: " + adminDto);
        boolean success = signupService.registerAdmin(adminDto);
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", success ? "Admin signup successful!" : "Signup failed. Try again.");
        return response;
    }

    @GetMapping("/signup/teacher")
    public String showTeacherSignupForm(Model model) {
        model.addAttribute("teacherDto", new TeacherSignupDTO());
        return "teacher_signup";
    }

    // Update your teacher and student endpoints to handle JSON requests
    @PostMapping(value = "/signup/teacher", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Map<String, Object> processTeacherSignupJson(@RequestBody TeacherSignupDTO teacherDto) {
        System.out.println("Received teacher signup JSON request: " + teacherDto);
        boolean success = signupService.registerTeacher(teacherDto);
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", success ? "Teacher signup successful!" : "Signup failed. Try again.");
        return response;
    }

    @PostMapping(value = "/signup/student", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Map<String, Object> processStudentSignupJson(@RequestBody StudentSignupDTO studentDto) {
        System.out.println("Received student signup JSON request: " + studentDto);
        boolean success = signupService.registerStudent(studentDto);
        Map<String, Object> response = new HashMap<>();
        response.put("success", success);
        response.put("message", success ? "Student signup successful!" : "Signup failed. Try again.");
        return response;
    }
    @GetMapping("/signup/student")
    public String showStudentSignupForm(Model model) {
        model.addAttribute("studentDto", new StudentSignupDTO());
        return "student_signup";
    }

    @PostMapping("/signup/student")
    public String processStudentSignup(@ModelAttribute StudentSignupDTO studentDto, Model model) {
        boolean success = signupService.registerStudent(studentDto);
        model.addAttribute("message", success ? "Student signup successful!" : "Signup failed. Try again.");
        return "student_signup";
    }
}