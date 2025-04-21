package com.repatikosam.ERP.Service;

import com.repatikosam.ERP.auth.Role;
import com.repatikosam.ERP.Repository.UserRepository;
import com.repatikosam.ERP.Repository.AdminDetailsRepository;
import com.repatikosam.ERP.Repository.TeacherDetailsRepository;
import com.repatikosam.ERP.Repository.StudentDetailsRepository;
import com.repatikosam.ERP.dto.AdminSignupDTO;
import com.repatikosam.ERP.dto.StudentSignupDTO;
import com.repatikosam.ERP.dto.TeacherSignupDTO;
import com.repatikosam.ERP.model.AdminDetails;
import com.repatikosam.ERP.model.StudentDetails;
import com.repatikosam.ERP.model.TeacherDetails;
import com.repatikosam.ERP.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public boolean registerAdmin(AdminSignupDTO dto) {
        try {
            System.out.println("Registering admin with userId: " + dto.getUserId());
            
            // Check if user already exists
            Optional<UserEntity> existingUserOpt = userRepository.findByUserId(dto.getUserId());
            if (existingUserOpt.isPresent()) {
                System.out.println("User already exists with userId: " + dto.getUserId());
                return false;
            }
    
            // Create and save user entity
            UserEntity user = new UserEntity();
            user.setUserId(dto.getUserId()); // Make sure this matches the DTO property name
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            user.setRole(Role.ADMIN);
            UserEntity savedUser = userRepository.save(user);
            System.out.println("User entity saved successfully with ID: " + savedUser.getId());
    
            // Create and save admin details
            AdminDetails admin = new AdminDetails();
            admin.setName(dto.getName());
            admin.setEmail(dto.getEmail());
            admin.setPhone(dto.getPhone());
            admin.setPassword(dto.getPassword()); // Or use passwordEncoder.encode(dto.getPassword()) if you want to store it encoded
            admin.setUser(savedUser);
            adminRepo.save(admin);
            System.out.println("Admin details saved successfully");
    
            return true;
        } catch (Exception e) {
            System.err.println("Error registering admin: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    public boolean registerTeacher(TeacherSignupDTO teacherDto) {
        if (userRepository.findByUserId(teacherDto.getTeacherId()).isPresent()) return false;

        UserEntity user = new UserEntity();
        user.setUserId(teacherDto.getTeacherId());
        user.setPassword(passwordEncoder.encode(teacherDto.getPassword()));
        user.setRole(Role.TEACHER);
        userRepository.save(user);

        TeacherDetails teacher = new TeacherDetails();
        teacher.setTeacherId(teacherDto.getTeacherId());
        teacher.setName(teacherDto.getName());
        teacher.setEmail(teacherDto.getEmail());
        teacher.setPhone(teacherDto.getPhone());
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