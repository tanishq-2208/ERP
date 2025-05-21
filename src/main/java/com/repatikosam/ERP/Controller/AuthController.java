package com.repatikosam.ERP.Controller;

import com.repatikosam.ERP.Repository.AdminDetailsRepository;
import com.repatikosam.ERP.Repository.StudentDetailsRepository;
import com.repatikosam.ERP.Repository.UserRepository;
import com.repatikosam.ERP.model.UserEntity;
import com.repatikosam.ERP.model.AdminDetails;
import com.repatikosam.ERP.Repository.TeacherDetailsRepository;
import com.repatikosam.ERP.model.TeacherDetails;
import com.repatikosam.ERP.model.StudentDetails; // <-- Add this import
import com.repatikosam.ERP.auth.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdminDetailsRepository adminDetailsRepository;
    @Autowired
    private TeacherDetailsRepository teacherDetailsRepository; // Add this
    @Autowired
    private StudentDetailsRepository studentDetailsRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String userId = loginRequest.get("userId");
        String password = loginRequest.get("password");

        if (userId == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("success", false, "error", "Please fill all fields"));
        }

        Optional<UserEntity> userOpt = userRepository.findByUserId(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "No such user exists"));
        }

        UserEntity user = userOpt.get();
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "Invalid credentials"));
        }

        // Check if user is an admin
        Optional<AdminDetails> adminOpt = adminDetailsRepository.findByUser(user);
        if (adminOpt.isEmpty()) {
            return ResponseEntity.status(403).body(Map.of("success", false, "error", "You are not a user for this role."));
        }

        String token = jwtUtil.generateToken(userId, "ADMIN");
        return ResponseEntity.ok(Map.of(
            "success", true,
            "token", token,
            "message", "SignIn Successful"
        ));
    }

    @PostMapping("/teacher-login")
    public ResponseEntity<?> teacherLogin(@RequestBody Map<String, String> loginRequest) {
        String teacherId = loginRequest.get("teacherId");
        String password = loginRequest.get("password");

        if (teacherId == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("success", false, "error", "Please fill all fields"));
        }

        TeacherDetails teacher = teacherDetailsRepository.findByTeacherId(teacherId);
        if (teacher == null) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "No such teacher exists"));
        }

        if (!passwordEncoder.matches(password, teacher.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "Invalid credentials"));
        }

        String token = jwtUtil.generateToken(teacherId, "TEACHER");
        return ResponseEntity.ok(Map.of(
            "success", true,
            "token", token,
            "message", "SignIn Successful"
        ));
    }

    @PostMapping("/student-login")
    public ResponseEntity<?> studentLogin(@RequestBody Map<String, String> loginRequest) {
        String studentId = loginRequest.get("studentId");
        String password = loginRequest.get("password");

        if (studentId == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("success", false, "error", "Please fill all fields"));
        }

        StudentDetails student = studentDetailsRepository.findByStudentId(studentId);
        if (student == null) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "No such student exists"));
        }

        // Use passwordEncoder for hashed passwords
        if (!passwordEncoder.matches(password, student.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("success", false, "error", "Invalid credentials"));
        }

        String token = jwtUtil.generateToken(studentId, "STUDENT");
        return ResponseEntity.ok(Map.of(
            "success", true,
            "token", token,
            "message", "SignIn Successful"
        ));
    }
}