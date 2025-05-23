package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.model.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Long> {
    StudentDetails findByStudentId(String studentId);
    Optional<StudentDetails> findByStudentIdAndPassword(String studentId, String password);
    List<StudentDetails> findByClassNameAndSection(String className, String section);
}