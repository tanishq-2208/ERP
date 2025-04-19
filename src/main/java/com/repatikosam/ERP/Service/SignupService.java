package com.repatikosam.ERP.Service;

import com.repatikosam.ERP.auth.entity.*;
import com.repatikosam.ERP.auth.Role;
import com.repatikosam.ERP.Repository.UserRepository;
import com.repatikosam.ERP.Repository.AdminDetailsRepository;
import com.repatikosam.ERP.Repository.TeacherDetailsRepository;
import com.repatikosam.ERP.Repository.StudentDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignupService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminDetailsRepository adminRepo;

    @Autowired
    private TeacherDetailsRepository teacherRepo;

    @Autowired
    private StudentDetailsRepository studentRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // In your registerAdmin method, add logging to help diagnose the issue
    public boolean registerAdmin(AdminSignupDTO dto) {
        try {
            System.out.println("Registering admin with userId: " + dto.getUserId());
            
            // Check if user already exists
            if (userRepository.findByUserId(dto.getUserId()).isPresent()) {
                System.out.println("User already exists with userId: " + dto.getUserId());
                return false;
            }
    
            // Create and save user entity
            UserEntity user = new UserEntity();
            user.setUserId(dto.getUserId());
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            user.setRole(Role.ADMIN);
            userRepository.save(user);
            System.out.println("User entity saved successfully");
    
            // Create and save admin details
            AdminDetails admin = new AdminDetails();
            admin.setName(dto.getName());
            admin.setEmail(dto.getEmail());
            admin.setPhone(dto.getPhone());
            admin.setUser(user);
            adminRepo.save(admin);
            System.out.println("Admin details saved successfully");
    
            return true;
        } catch (Exception e) {
            System.err.println("Error registering admin: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    public boolean registerTeacher(TeacherSignupDTO dto) {
        if (userRepository.findByUserId(dto.getTeacherId()).isPresent()) return false;

        UserEntity user = new UserEntity();
        user.setUserId(dto.getTeacherId());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(Role.TEACHER);
        userRepository.save(user);

        TeacherDetails teacher = new TeacherDetails();
        teacher.setTeacherId(dto.getTeacherId());
        teacher.setName(dto.getName());
        teacher.setEmail(dto.getEmail());
        teacher.setPhone(dto.getPhone());
        teacher.setUser(user);
        teacherRepo.save(teacher);

        return true;
    }

    public boolean registerStudent(StudentSignupDTO dto) {
        if (userRepository.findByUserId(dto.getStudentId()).isPresent()) return false;

        UserEntity user = new UserEntity();
        user.setUserId(dto.getStudentId());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(Role.STUDENT);
        userRepository.save(user);

        StudentDetails student = new StudentDetails();
        student.setStudentId(dto.getStudentId());
        student.setStudentName(dto.getStudentName());
        student.setDob(dto.getDob());
        student.setParentName(dto.getParentName());
        student.setParentPhone(dto.getParentPhone());
        student.setUser(user);
        studentRepo.save(student);

        return true;
    }
}