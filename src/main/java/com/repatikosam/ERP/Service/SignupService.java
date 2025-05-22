package com.repatikosam.ERP.Service;

import com.repatikosam.ERP.dto.ParentSignupDTO;
import com.repatikosam.ERP.Repository.ParentDetailsRepository;  // Add this import
import com.repatikosam.ERP.model.ParentDetails;  // Add this import
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
    private ParentDetailsRepository parentRepo;

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
            admin.setPassword(passwordEncoder.encode(dto.getPassword())); // Or use passwordEncoder.encode(dto.getPassword()) if you want to store it encoded
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
        try {
            System.out.println("Registering teacher with teacherId: " + teacherDto.getTeacherId());

            // Check if user already exists
            Optional<UserEntity> existingUserOpt = userRepository.findByUserId(teacherDto.getTeacherId());
            if (existingUserOpt.isPresent()) {
                System.out.println("User already exists with teacherId: " + teacherDto.getTeacherId());
                return false;
            }

            // Create and save user entity
            UserEntity user = new UserEntity();
            user.setUserId(teacherDto.getTeacherId());
            user.setPassword(passwordEncoder.encode(teacherDto.getPassword()));
            user.setRole(Role.TEACHER);
            UserEntity savedUser = userRepository.save(user);
            System.out.println("User entity saved successfully with ID: " + savedUser.getId());

            // Create and save teacher details
            // In the registerTeacher method, update where teacher details are being set
            TeacherDetails teacher = new TeacherDetails();
            teacher.setTeacherId(teacherDto.getTeacherId());
            teacher.setName(teacherDto.getName());
            teacher.setEmail(teacherDto.getEmail());
            teacher.setPhone(teacherDto.getPhone());
            teacher.setPassword(passwordEncoder.encode(teacherDto.getPassword()));
            teacher.setSubject(teacherDto.getSubject());       // Added line
            teacher.setClassName(teacherDto.getClassName());   // Added line
            teacher.setSection(teacherDto.getSection());       // Added line
            teacher.setUser(savedUser);
            teacherRepo.save(teacher);
            System.out.println("Teacher details saved successfully");

            return true;
        } catch (Exception e) {
            System.err.println("Error registering teacher: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    // In the registerStudent method, add these lines where student details are being set
    public boolean registerStudent(StudentSignupDTO dto) {
        try {
            System.out.println("Registering student with studentId: " + dto.getStudentId());

            // Check if user already exists
            Optional<UserEntity> existingUserOpt = userRepository.findByUserId(dto.getStudentId());
            if (existingUserOpt.isPresent()) {
                System.out.println("User already exists with studentId: " + dto.getStudentId());
                return false;
            }

            // Create and save user entity
            UserEntity user = new UserEntity();
            user.setUserId(dto.getStudentId());
            user.setPassword(passwordEncoder.encode(dto.getPassword()));
            user.setRole(Role.STUDENT);
            UserEntity savedUser = userRepository.save(user);
            System.out.println("User entity saved successfully with ID: " + savedUser.getId());

            // Create and save student details
            StudentDetails student = new StudentDetails();
            student.setStudentId(dto.getStudentId());
            student.setStudentName(dto.getStudentName());
            student.setDob(dto.getDob());
            student.setParentName(dto.getParentName());
            student.setParentPhone(dto.getParentPhone());
            student.setPassword(passwordEncoder.encode(dto.getPassword()));
            student.setClassName(dto.getClassName());    // Added line
            student.setSection(dto.getSection());        // Added line
            student.setUser(savedUser);
            studentRepo.save(student);
            System.out.println("Student details saved successfully");

            return true;
        } catch (Exception e) {
            System.err.println("Error registering student: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    public boolean registerParent(ParentSignupDTO parentDto) {
        try {
            System.out.println("Processing parent signup with studentId: " + parentDto.getStudentId());

            // Verify student exists and phone matches
            StudentDetails student = studentRepo.findByStudentId(parentDto.getStudentId());
            if (student == null) {
                System.out.println("Student not found with ID: " + parentDto.getStudentId());
                return false;
            }

            // Verify parent phone number matches
            if (!student.getParentPhone().equals(parentDto.getParentNo())) {
                System.out.println("Parent phone number doesn't match student records");
                return false;
            }

            // Create and save user entity with same userId as student
            UserEntity user = new UserEntity();
            user.setUserId(parentDto.getStudentId()); // Using same student ID
            user.setRole(Role.PARENT);
            user.setPassword("dummy-password");
            UserEntity savedUser = userRepository.save(user);
            System.out.println("User entity saved successfully with ID: " + savedUser.getUserId());

            // Create parent details with user reference
            ParentDetails parent = new ParentDetails();
            parent.setStudentId(parentDto.getStudentId());
            parent.setChildName(student.getStudentName());
            parent.setParentNo(parentDto.getParentNo());
            parent.setUser(savedUser);
            parentRepo.save(parent);
            System.out.println("Parent signup successful");

            return true;
        } catch (Exception e) {
            System.err.println("Error in parent signup: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}