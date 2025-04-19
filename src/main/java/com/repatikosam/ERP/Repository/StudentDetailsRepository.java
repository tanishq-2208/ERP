package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.auth.entity.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Long> {
    // You can add custom query methods here if needed
    StudentDetails findByStudentId(String studentId);
}