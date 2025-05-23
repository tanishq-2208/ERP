package com.repatikosam.ERP.Service;

import com.repatikosam.ERP.dto.AddMarksDTO;
import com.repatikosam.ERP.dto.StudentSignupDTO;
import com.repatikosam.ERP.model.Marks;
import com.repatikosam.ERP.model.StudentDetails;
import com.repatikosam.ERP.model.UserEntity;
import com.repatikosam.ERP.Repository.MarksRepository;
import com.repatikosam.ERP.Repository.StudentDetailsRepository;
import com.repatikosam.ERP.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MarksService {

    @Autowired
    private MarksRepository marksRepository;

    @Autowired
    private StudentDetailsRepository studentDetailsRepository;

    @Autowired
    private UserRepository userRepository;

    public List<StudentSignupDTO> getStudentsByClassAndSection(String className, String section) {
        try {
            System.out.println("MarksService: Fetching students for class: " + className + " and section: " + section);
            List<StudentDetails> students = studentDetailsRepository.findByClassNameAndSection(className, section);
            System.out.println("MarksService: Found " + students.size() + " students");
            
            List<StudentSignupDTO> dtos = students.stream()
                .map(student -> {
                    StudentSignupDTO dto = new StudentSignupDTO();
                    dto.setStudentId(student.getStudentId());
                    dto.setStudentName(student.getStudentName());
                    dto.setClassName(student.getClassName());
                    dto.setSection(student.getSection());
                    System.out.println("MarksService: Mapped student: " + dto.getStudentId() + " - " + dto.getStudentName());
                    return dto;
                })
                .collect(Collectors.toList());
            
            return dtos;
        } catch (Exception e) {
            System.err.println("MarksService Error: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Failed to fetch students", e);
        }
    }

    public Marks addMarks(AddMarksDTO marksDTO) {
        try {
            System.out.println("Adding marks for student: " + marksDTO.getStudentId());

            // Verify student exists
            StudentDetails student = studentDetailsRepository.findByStudentId(marksDTO.getStudentId());
            if (student == null) {
                System.out.println("Student not found with ID: " + marksDTO.getStudentId());
                throw new RuntimeException("Student not found");
            }

            // Verify teacher exists
            Optional<UserEntity> teacherOpt = userRepository.findByUserId(marksDTO.getTeacherId());
            if (teacherOpt.isEmpty()) {
                System.out.println("Teacher not found with ID: " + marksDTO.getTeacherId());
                throw new RuntimeException("Teacher not found");
            }
            UserEntity teacher = teacherOpt.get();

            // Create and save marks
            Marks marks = new Marks();
            marks.setClassName(marksDTO.getClassName());
            marks.setSection(marksDTO.getSection());
            marks.setTerminal(marksDTO.getTerminal());
            marks.setSubject(marksDTO.getSubject());
            marks.setStudent(student);
            marks.setStudentName(student.getStudentName());
            marks.setTeacher(teacher);
            marks.setTeacherName(marksDTO.getTeacherName());
            marks.setMarks(marksDTO.getMarks());

            Marks savedMarks = marksRepository.save(marks);
            System.out.println("Marks saved successfully for student: " + marksDTO.getStudentId());
            return savedMarks;

        } catch (Exception e) {
            System.err.println("Error adding marks: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Failed to add marks", e);
        }
    }
}